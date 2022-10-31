// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "@finnrg/react-firebaseui/StyledFirebaseAuth";
import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [EmailAuthProvider.PROVIDER_ID],
};

const Login = () => (
  <div>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
  </div>
);

export default Login;
