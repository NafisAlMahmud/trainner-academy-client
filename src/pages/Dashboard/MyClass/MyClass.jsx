import React, { useContext } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../providers/AuthProvider";
import { useEffect } from "react";

const MyClass = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://trainer-academy-server.vercel.app/addTraining/myCourses/${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Error fetching classes");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching classes:", error);
        // Handle error, e.g., show an error message
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user]);
  return (
    <div className="w-full">
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
          {courses.map((course) => (
            <tr key={course._id}>
              <td>
                <div className="w-20 h-16">
                  <img src={course.image} />
                </div>
              </td>
              <td>{course.courseName}</td>
              <td>{course.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClass;
