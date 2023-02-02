import React from "react";
import Auth from "../components/Auth/Auth";
import { useAuth } from "../contexts/AuthContextProvider";
import HomePage from "./HomePage";

const AuthPage = () => {
  const {
    user: {email},
  } = useAuth();
  return (
    <div>
      {email ? <HomePage/> : <Auth/> }
    </div>
  );

};

export default AuthPage;
