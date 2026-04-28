/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import Header from "./componets/Header/index";
import Footer from "./componets/Footer";
import Home from "./pages/Home/Home";
import Hero from "./componets/Hero";
import Blog from "./componets/Blog";
import Interview from "./componets/Interview";
import Clinics from "./componets/Clinics";
import Card from "./componets/UI/Card/Card";
import ProfileHistoryCard from "./componets/ProfileHistoryCard";
import Registration from "./componets/UI/Registration/Registration";
import Login from "./componets/Login";
import Register from "./componets/Register";
import Profile from "./pages/Profile/Profile";
import ClinicDetail from "./componets/ClinicDetail";
// import { Code } from "firebase/data-connect";
// import Code from "./componets/Code";

function App() {
  return (
    <>
      {/* <Header />
      <ProfileHistoryCard/>
      <Hero/>
      <Home />
      <Clinics/>
      <Interview/>
      <Blog/>
      <Footer /> */}
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Code /> */}
      <Profile />
      <ClinicDetail/>
    </>
  );
}

export default App;
