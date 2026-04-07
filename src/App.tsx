import "./App.css";
import Header from "./componets/Header/index";
import Footer from "./componets/Footer";
import Home from "./pages/Home/Home";
import Hero from "./componets/Hero";
import Blog from "./componets/Blog";
import Interview from "./componets/Interview";
import Clinics from "./componets/Clinics";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Home />
      <Clinics/>
      <Interview/>
      <Blog/>
      <Footer />
    </>
  );
}

export default App;
