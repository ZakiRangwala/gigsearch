import Sawo from "sawo";
import React from "react";

function Login() {
  var config = {
    // should be same as the id of the container created on 3rd step
    containerID: "<container-ID>",
    // can be one of 'email' or 'phone_number_sms'
    identifierType: "phone_number_sms",
    // Add the API key copied from 2nd step
    apiKey: "",
    // Add a callback here to handle the payload sent by sdk
    onSuccess: (payload) => {},
  };
  return (
    <div className="Login-Container">
      <div id="sawo-container" style="height: 300px; width: 300px;"></div>
    </div>
  );
}

export default Login;
