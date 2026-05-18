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
import Login from "./componets/Login";
import Register from "./componets/Register";
import Profile from "./pages/Profile/Profile";
import ClinicProfile from "./componets/ClinicProfile";
import Code from "./componets/Code";
import Recover from "./componets/Recover";
import Article from "./componets/Article";
import BlogPage from "./componets/BlogPage";
import Appointement from "./componets/Appointment";
import Choise from "./componets/UI/Choise/Choise";
import MobCard from "./componets/UI/MobCard/MobCard";
import card from "./assets/Imgs/blog-card.png"
import ClinicDetail from "./componets/ClinicDetail";
import ClinicFeedback from "./componets/ClinicFeedback";




function App({tit, inputText}) {
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
      {/* <Profile /> */}
      <ClinicDetail/>
      <ClinicFeedback/>
      {/* <Clinics/> */}
      {/* <ClinicProfile/>
     <Blog/>
        <Article/>
        <BlogPage/> */}
      {/* <Appointement/> */}
     {/* <Choise tit="Выберите клинику" inputText="Поиск клиники"> <MobCard title="Med Center" add="ул. Московская, 189" span1="4.85" text="(255)" span2="12 лет опыта" img={card} imgWidth={"104px"} imgHeight={"104px"}/> </Choise> */}

      {/* <Login />
      <Register />
      <Code />
      <Recover /> */}
  
    </>
  );
}

export default App;
