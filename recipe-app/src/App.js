import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import ProfileContextProvider from "./profileContext/profileContext";
import { useState } from "react";


function App() {
  let clientId =
    "169162112976-ca9n5mfgi1o679cm251beuujids6rnii.apps.googleusercontent.com";
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <ProfileContextProvider>
          <Navbar />
          <AllRoutes />
          <Footer />
        </ProfileContextProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
