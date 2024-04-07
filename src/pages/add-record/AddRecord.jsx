import React, { useState } from "react";
import axios from "axios";

const AddRecord = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    workingMinutes: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to API endpoint with form data
      const response = await axios.post(
        "http://localhost:6060/working-records",
        formData
      );
      console.log("Response:", response.data);
      // Reset form after successful submission
      setFormData({
        title: "",
        date: "",
        workingMinutes: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 className="title mt-3">Add Record</h2>
      <form style={{ width: "26rem" }} className="mt-5" onSubmit={handleSubmit}>
        {/* title input */}
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleInputChange}
          />
          <label className="form-label" htmlFor="title">
            Title
          </label>
        </div>
        {/* date input */}
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleInputChange}
          />
          {/* <label className="form-label" htmlFor="form4Example2">
            Date
          </label> */}
        </div>
        {/* Working Minutes input */}
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="workingMinutes"
            name="workingMinutes"
            className="form-control"
            value={formData.workingMinutes}
            onChange={handleInputChange}
          />
          <label className="form-label" htmlFor="workingMinutes">
            Working Minutes
          </label>
        </div>

        {/* Submit button */}
        <button
          data-mdb-ripple-init
          type="submit"
          className="btn btn-primary btn-block mb-4"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddRecord;
