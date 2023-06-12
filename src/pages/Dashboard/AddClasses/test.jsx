const handleAddClass = async (data) => {
  const { name, classImg, seats, price } = data;
  const enrolled = 0;
  const newData = {
    instructorName: user?.displayName,
    email: user?.email,
    name,
    classImg,
    seats: parseFloat(seats),
    price: parseFloat(price),
    status: "pending",
    enrolledStudent: parseFloat(enrolled),
  };
  console.log(newData);
  try {
    const response = await axios.post("http://localhost:5000/classes", {
      ...newData,
      status: "pending",
    });

    if (response.status === 200) {
      reset();
      Swal.fire({
        title: "Added a class Successfully",
        showClass: {
          popup: "animate_animated animate_fadeInDOwn ",
        },
        hideClass: {
          popup: "animate_animated animate_fadeOutUp",
        },
      });
    } else {
      console.error("Error adding class:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding class:", error);
  }
};
