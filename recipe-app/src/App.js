import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RecipeApp from "./components/RecipeApp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeApp />
      <Footer />
    </div>
  );
}

export default App;
