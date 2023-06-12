import { Helmet } from "react-helmet";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import TopTrainers from "../TopTrainers/TopTrainers";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Trainer Academy</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <TopTrainers></TopTrainers>
    </div>
  );
};

export default Home;
