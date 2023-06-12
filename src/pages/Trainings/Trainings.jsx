import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Trainings = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://trainer-academy-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>Training | Trainer Academy </title>
      </Helmet>
      <div className="grid grid-cols-3 pt-28">
        {courses.map((courses, index) => (
          <div className="card w-96 bg-base-100 mx-auto shadow-xl">
            <figure>
              <img src={courses.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{courses.courseName}</h2>
              <h2 className="card-title">Trainer: {courses.trainerName}</h2>
              <p>Price: {courses.price}$</p>
              <p>Available seats: {courses.numberOfPlayers}</p>
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

export default Trainings;
