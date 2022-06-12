import SignUpForm from "../routes/sign-up.component";
import SingIn from "../routes/sign-in.component";
import '../styles/authentication.styles.scss'

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SingIn />
      <SignUpForm />
    </div>
  )
}

export default Authentication;