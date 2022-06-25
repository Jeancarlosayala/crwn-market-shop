import SignUpForm from "../routes/sign-up.component";
import SingIn from "../routes/sign-in.component";
import { AuthenticationContainer } from '../styles/authentication.styles'

const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SingIn />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication;