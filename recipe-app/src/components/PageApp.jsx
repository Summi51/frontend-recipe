import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React from "react";
const PageApp = () => {
  const loginSuccess = (res) => {
    const decode = jwt_decode(res.credential);
    // setState(decode);
    // localStorage.setItem("oath", JSON.stringify(decode));
    // axios
    //   .post(`${ApiUrl}/users`, decode)

    //   .then((res) => {});
    // navigate("/messenger");

    console.log(decode);
  };

  const loginError = (res) => {
    console.log(res);
  };
  return (
    <div>
      <GoogleLogin onSuccess={loginSuccess} onError={loginError} />
    </div>
  );
};

export default PageApp;
