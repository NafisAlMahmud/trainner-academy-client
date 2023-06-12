import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Trainers = () => {
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
    <div className="">
      <Helmet>
        <title>Trainers | Trainer Academy </title>
      </Helmet>
      <div className="grid grid-cols-3 pt-28">
        {trainers.map((trainer) => (
          <div className="card w-96 bg-base-100 mx-auto shadow-xl h-[490px]">
            <figure>
              <img className="w-4/5" src={trainer.image} alt="Shoes" />
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

export default Trainers;
