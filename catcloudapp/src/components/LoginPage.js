/**
 * @file LoginPage.js
 * @description This file contains the LoginPage component, which renders a button for signing in with Google.
 */

import React from "react";
import { signInWithGoogle } from "../firebase/auth";

const LoginPage = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
