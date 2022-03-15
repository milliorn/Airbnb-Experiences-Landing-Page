import "./App.css";
import PhotoGrid from "./assets/photo-grid.png";
import CardLayout from "./components/CardLayout";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <Navbar src={logo} alt="logo" />
      <Hero
        src={PhotoGrid}
        alt="PhotoGrid"
        h1="Online Experiences"
        p="Join unique interactive activities led by one of a kind hosts-all without leaving home."
      />
      <CardLayout />
    </div>
  );
}

export default App;
