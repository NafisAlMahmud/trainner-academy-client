import React from "react";

const AboutUs = () => {
  return (
    <div className="lg:my-20">
      <div className="grid md:grid-cols-2">
        <div>
          <img
            className="md:w-2/4 mx-auto"
            src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/176455/s960_Football_gov.uk.jpg"
            alt=""
          />
        </div>
        <div className="md:w-3/4">
          <h2 className="font-bold text-3xl text-left ">About Us</h2>
          <p className="pt-8">
            Welcome to our trainer academy website! We are providing a
            comprehensive platform for football enthusiasts of all ages and
            skill levels. Whether you're a beginner looking to learn the basics
            or an experienced player aiming to enhance your technique, we have
            the resources and expertise to help you achieve your goals. At our
            website, we understand the importance of proper training and the
            impact it can have on your performance. That's why we have assembled
            a team of highly qualified coaches and trainers who are passionate
            about the game and committed to helping you improve. Our training
            programs are carefully designed to cover all aspects of football,
            including technical skills tactical knowledge, physical
            conditioning, and mental resilience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
