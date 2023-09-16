import React, { useState } from "react";
import { useLoggedIn, login } from "../../cart";

import styles from "./login.module.scss";

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  if (loggedIn) return null;

  return (
    <>
      <div onClick={() => setShowLogin(true)}>
        <i className="ri-login-box-line"></i>
        <div>press me to log in</div>
      </div>
      {showLogin && (
        <div className={styles.loginModal}>
          <input
            type="text"
            placeholder="user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={styles.userInput}
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className={styles.userInput}
          />
          <button
            className={styles.login}
            onClick={() => login(userName, password)}
            id="loginButton"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
