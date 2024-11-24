import React, { useState } from "react";
import ValidationMessage from "./validate_message";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    dob: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z0-9]+$/.test(formData.studentId)) {
      newErrors.studentId = "Student ID must be alphanumeric.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Student registered successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Register Student</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="input input-bordered mb-2"
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="input input-bordered mb-2"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered mb-2"
        />
      </div>
      <div>
        <label>Student ID:</label>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          className="input input-bordered mb-2"
        />
        {errors.studentId && <ValidationMessage message={errors.studentId} />}
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="input input-bordered mb-2"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
