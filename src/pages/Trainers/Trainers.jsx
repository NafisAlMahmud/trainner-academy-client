import { useEffect, useState } from "react";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <div className="grid grid-cols-3 pt-28">
        {trainers.map((trainer) => (
          <div className="card w-96 bg-base-100 mx-auto shadow-xl">
            <figure>
              <img src={trainer.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{trainer.name}</h2>

              <p>Price: {trainer.email}$</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
