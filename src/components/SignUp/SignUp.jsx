import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Password did not match");
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    }

    // console.log(error);
    // console.log(email, password, confirm);

    // alert("User Created Successfully");
    // setError("");
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="sign-up-box">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-controller">
          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" id="" required />
          <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" id="" required /> <br />
          <label htmlFor="confirm">Confirm Password</label> <br />
          <input type="password" name="confirm" id="" required />
          {error && <p className="error-message">{error}</p>}
        </div>
        <input type="submit" value="Sign Up" className="btn-submit" />
        <p>
          Already Have an account?{" "}
          <Link to="/login" className="sign-up-link">
            Login
          </Link>
        </p>
      </form>
      <div className="hr-line">
        -------------------------------- or --------------------------------
      </div>
      <button className="google-btn">
        <img src="/src/assets/google.png" alt="" />
        Continue with Google
      </button>
    </div>
  );
};

export default SignUp;
