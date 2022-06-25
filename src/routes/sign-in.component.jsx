import { useState} from "react"
import { signInWithEmail, signInWithGooglePopup } from "../utils/firebase/firebase.utils"
import Button, {BUTTON_TYPE_CLASSES} from "../components/buttons.component"
import FormInput from "../components/form-input.component"
import {ButtonsContainer, SignInContainer} from '../styles/sign-in.styles'

const signInForm = {
  email: '',
  password: ''
}

const SingIn = () => {

  const logGoogleUser = async () => {
    await signInWithGooglePopup()
  }

  const [form, setForm] = useState(signInForm)
  const { email, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const resetFormField = () => {
    setForm(signInForm);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInWithEmail(email, password)

      resetFormField()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email')
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break;
        default:
          console.log(error);
          break;
      }
    }
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          required
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        <ButtonsContainer>
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.neumorphism} >Sing In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SingIn;