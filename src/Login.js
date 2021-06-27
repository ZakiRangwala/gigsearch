import Sawo from "sawo";
import React, { useEffect, useState } from "react";
import styles from "./styles"
import "./Login.css";


function Login() {
  const [userPayload, setUserPayload] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const config = {
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "email",
      apiKey: process.env.REACT_APP_SAWOLABS_API_KEY,
      onSuccess: onSuccessLogin,
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  const onSuccessLogin = async (payload) => {
    setUserPayload(payload);
    setIsLoggedIn(true);
  };

  return (
    <React.Fragment>
      <div style={styles.containerStyle} className="log-in-container">
        <section>
          <h1>Sign in</h1>
          {isLoggedIn && (
            <React.Fragment>
              <div style={styles.loggedin}>
                <h2>User Successfull login</h2>
                <div>UserId: {userPayload.user_id}</div>
                <div>Verification Token: {userPayload.verification_token}</div>
              </div>
            </React.Fragment>
          )}
          {!isLoggedIn && (
            <div style={styles.formContainer} id="sawo-container">
            </div>
          )}
        </section>
      </div>
    </React.Fragment>
  );
}

export default Login;
