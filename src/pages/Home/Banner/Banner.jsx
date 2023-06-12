import { Fade } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel>
      <div className="relative">
        <img
          src="https://res.cloudinary.com/parallax-agency/image/upload/c_fill%2Cq_auto%2Cf_auto/statamic/cpd-2020-production/cpdcourses-sportscoaches.jpg"
          alt="Slide 1"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
          <div className="w-2/4">
            <Fade>
              <h2 className="text-white text-6xl font-bold">
                Welcome to our Trainner Academy
              </h2>
            </Fade>

            <Fade cascade damping={0.1}>
              <p className="text-white pt-10">
                What sets us apart is our focus on creating a supportive and
                inclusive community. We believe that football is more than just
                a sport; it's a shared passion that unites people from all walks
                of life. Through our forums, discussion boards, and social media
                channels, we encourage players, coaches, and fans to connect,
                exchange knowledge, and inspire one another.
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://www.topendsports.com/sport/softball/images/softball-team-coach.jpg"
          alt="Slide 2"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
          <h2 className="text-white text-2xl">
            Join us to Improve Your Football Skills
          </h2>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://uploads-ssl.webflow.com/611b68bedd47db37c67ba1b3/613774807794b065ee9e9a77_coach-instructing-football-team-in-field-2R8SJZB.jpeg"
          alt="Slide 3"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
          <h2 className="text-white text-2xl">
            Unlock Your True Potential on the Field
          </h2>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
