import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddClasses = () => {
  const { user, loading } = useAuth();

  const handleAddCourse = (event) => {
    event.preventDefault();

    const form = event.target;

    const courseName = form.courseName.value;
    const trainerName = form.trainerName.value;
    const numberOfPlayers = form.numberOfPlayers.value;
    const description = form.description.value;
    const image = form.image.value;
    const price = form.price.value;
    const email = form.email.value;

    const newClass = {
      courseName,
      trainerName,
      numberOfPlayers,
      description,
      image,
      price,
      email,
    };
    console.log(newClass);
    console.log(user.name);

    // send data to server
    fetch("https://trainer-academy-server.vercel.app/addTraining", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "classes Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24 w-full">
      <h2 className="text-3xl font-bold">Add Classes</h2>
      <form onSubmit={handleAddCourse}>
        {/* name and chef*/}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Course Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="courseName"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Trainer Name</span>
            </label>
            <label className="input-group">
              <input
                disabled
                defaultValue={user.displayName}
                type="text"
                name="trainerName"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* avilable players and email */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Avilable Players</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="numberOfPlayers"
                placeholder="
                number of player"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <label className="input-group">
              <input
                disabled
                type="email"
                name="email"
                defaultValue={user.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* photo */}
        <div className="">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo URL </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="add Course"
          className="btn btn-block mt-5 bg-black text-white"
        />
      </form>
    </div>
  );
};

export default AddClasses;
