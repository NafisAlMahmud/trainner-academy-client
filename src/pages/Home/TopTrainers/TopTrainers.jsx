import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TopTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://trainer-academy-server.vercel.app/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="mx-auto">
      <h3 className="text-center font-semibold text-3xl">Our Top Trainers</h3>
      <div className="grid lg:grid-cols-3 lg:pt-10 gap-4">
        {trainers.slice(0, 6).map((trainer) => (
          <div className="card w-96 bg-base-100 mx-auto gap-5 shadow-xl h-[400px]">
            <figure>
              <img src={trainer.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{trainer.name}</h2>

              <p>Price: {trainer.email}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrainers;
