import { signInWithGooglePopup, createUserAuth } from "../utils/firebase/firebase.utils";

const SignIn = () =>{

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const getUserDoc = await createUserAuth(user)
  }
 
  return(
    <div>
      <h1>sign in page</h1>

      <button onClick={logGoogleUser}>Sing In With Google</button>
    </div>
  )
}

export default SignIn;