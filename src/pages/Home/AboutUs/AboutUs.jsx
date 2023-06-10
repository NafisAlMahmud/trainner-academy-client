import React from "react";

const AboutUs = () => {
  return (
    <div className="my-20">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            necessitatibus! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Labore, accusantium quia, quae eveniet deleniti alias culpa
            consequatur distinctio sit, libero eius voluptatum quidem odio in!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            necessitatibus! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Labore, accusantium quia, quae eveniet deleniti alias culpa
            consequatur distinctio sit, libero eius voluptatum quidem odio in!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
