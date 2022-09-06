import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import Input from "../input/input.component";
import "./signup.styles.scss";

const defaultValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const Signup = () => {
  const [formValues, setValues] = useState(defaultValues);
  const { displayName, email, password, confirmPassword } = formValues;

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
    if (password !== confirmPassword) {
      alert("Passwords does not match");
      return;
    }

    try {
      const userCreated = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (userCreated && userCreated.user) {
        await createUserDocumentFromAuth({
          ...userCreated.user,
          displayName
        });
      }
    } catch (e) {
      alert("Unable to signup");
    } finally {
      clearForm();
    }
  };

  return (
    <div className="signup-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your email & password</span>
      <form onSubmit={submitForm}>
        <Input
          label="Display Name"
          required
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />

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

        <Input
          label="Confirm Password"
          required
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />

        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
};

export default Signup;
