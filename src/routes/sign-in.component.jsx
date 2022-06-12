import Button from "../components/buttons.components";
import {
  signInWithGooglePopup,
  createUserAuth,
} from "../utils/firebase/firebase.utils";
import SignUpForm from "./sign-up.component";


const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserAuth(user)
  }

  return (
    <div>
      <h1>sign in page</h1>
      <Button buttonType='google' onClick={logGoogleUser}>Sing In With Google Popup</Button>

      <SignUpForm />
    </div>
  )
}

export default SignIn;