import { Helmet } from "react-helmet";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import TopTrainers from "../TopTrainers/TopTrainers";
import FeedBack from "../Feedback/FeedBack";
import TopClasses from "../TopClasses/TopClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Trainer Academy</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <TopClasses></TopClasses>
      <TopTrainers></TopTrainers>
    </div>
  );
};

export default Home;
