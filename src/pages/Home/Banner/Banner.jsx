import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <Carousel>
      <div className="w-full h-[900px] mx-auto">
        <img src="https://res.cloudinary.com/parallax-agency/image/upload/c_fill%2Cq_auto%2Cf_auto/statamic/cpd-2020-production/cpdcourses-sportscoaches.jpg" />
      </div>
      <div>
        <img src="https://www.topendsports.com/sport/softball/images/softball-team-coach.jpg" />
      </div>
      <div className=" h-[900px]">
        <img src="https://uploads-ssl.webflow.com/611b68bedd47db37c67ba1b3/613774807794b065ee9e9a77_coach-instructing-football-team-in-field-2R8SJZB.jpeg" />
      </div>
    </Carousel>
  );
};

export default Banner;
