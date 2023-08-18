import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    alert("Login Successful");
    // setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error);
        setError(error);
      });
  };
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-controller">
          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" id="" required />
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
          <p style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        <input type="submit" value="Login" className="btn-submit" />
        <p>
          New to Ema-john?{" "}
          <Link to="/signup" className="sign-up-link">
            Create New Account
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

export default Login;
