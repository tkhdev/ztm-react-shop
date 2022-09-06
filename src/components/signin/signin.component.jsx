import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signinUserWithEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import Input from "../input/input.component";
import "./signin.styles.scss";

const defaultValues = {
  email: "",
  password: ""
};

const Signin = () => {
  const [formValues, setValues] = useState(defaultValues);
  const { email, password } = formValues;

  const signinGoogleUser = async (e) => {
    e.preventDefault();
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...formValues,
      [name]: value
    });
  };

  const clearForm = () => setValues(defaultValues);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await signinUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
    clearForm();
  };

  return (
    <div className="signin-container">
      <h2>Already have an account?</h2>
      <span>Signin with your email & password</span>
      <form onSubmit={submitForm}>
        <Input
          label="Email"
          required
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
        />

        <Input
          label="Password"
          required
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
        />
        <div className="buttons-container">
          <Button type="submit">Signin</Button>
          <Button type="button" buttonType="google" onClick={signinGoogleUser}>
            Google Signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
