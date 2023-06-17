import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const TopClasses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://trainer-academy-server.vercel.app/popularCourses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };
  return (
    <div className="mx-auto my-10 lg:mx-10">
      <h3 className="text-center font-semibold text-3xl">
        Our Popular Courses
      </h3>
      <p className="text-center font-semibold">
        top Classes based on Student enrollment
      </p>
      <div className="grid lg:grid-cols-3 lg:pt-10 gap-4">
        {courses.slice(0, 6).map((course) => (
          <motion.div
            key={course._id}
            className="bg-white p-4 rounded-lg shadow-md relative overflow-hidden"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <div>
              <figure>
                <img src={course.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{course.courseName}</h2>

                <p>Trainer: {course.trainerName}</p>
                <p>Number Of Players: {course.numberOfPlayers}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopClasses;
