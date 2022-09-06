import "./auth.styles.scss"

import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup.component";

const Auth = () => {
  return (
    <div className="auth-container">
      <Signin />
      <Signup />
    </div>
  );
};

export default Auth;
