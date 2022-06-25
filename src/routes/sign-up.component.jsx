import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../components/buttons.component";
import FormInput from "../components/form-input.component";
import { SignUpContainer } from '../styles/sign-up.styles'

import { createUserEmail, createUserAuth } from "../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;



  const resetFormField = () => {
    setFormField(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('The password is not match');
      return;
    }

    try {
      const { user } = await createUserEmail(email, password);
      await createUserAuth(user, { displayName });


      resetFormField();

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('This user is already exist, please use other user');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormField({ ...formField, [name]: value });
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName} />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email} />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password} />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword} />

        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.neumorphism} >Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm;