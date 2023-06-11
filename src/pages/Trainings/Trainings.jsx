import { useEffect, useState } from "react";

const Trainings = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
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
