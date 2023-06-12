import { Helmet } from "react-helmet";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import TopTrainers from "../TopTrainers/TopTrainers";
import FeedBack from "../Feedback/FeedBack";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Trainer Academy</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <FeedBack></FeedBack>
      <TopTrainers></TopTrainers>
    </div>
  );
};

export default Home;
