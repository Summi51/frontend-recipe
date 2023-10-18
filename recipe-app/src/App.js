import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageApp from "./components/PageApp";
// import RecipeApp from "./components/RecipeApp";

function App() {
  let clientId =
    "169162112976-ca9n5mfgi1o679cm251beuujids6rnii.apps.googleusercontent.com";
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <Navbar />
        {/* <RecipeApp /> */}
        <PageApp />
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
