import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TopClasses = () => {
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
    <div className="mx-auto my-10">
      <h3 className="text-center font-semibold text-3xl">
        Our Popular Courses
      </h3>
      <p className="text-center font-semibold">
        top Classes based on Student enrollment
      </p>
      <div className="grid lg:grid-cols-3 lg:pt-10 gap-4">
        {courses.slice(0, 6).map((course) => (
          <div className="card w-96 bg-base-100 mx-auto gap-5 shadow-xl h-[400px]">
            <figure>
              <img src={course.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.courseName}</h2>

              <p>Trainer: {course.trainerName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClasses;
