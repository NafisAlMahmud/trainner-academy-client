import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AllClasses = () => {
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
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Course Describtions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((courses, index) => (
            <tr key={courses._id}>
              <th>{index + 1}</th>
              <td>{courses.courseName}</td>
              <td>{courses.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllClasses;
