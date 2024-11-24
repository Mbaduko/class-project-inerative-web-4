import React, { useState } from "react";
import ValidationMessage from "./validate_message";

const LecturerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format.";
    }
    if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be numeric.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Lecturer registered successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Register Lecturer</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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
        {errors.email && <ValidationMessage message={errors.email} />}
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="input input-bordered mb-2"
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input input-bordered mb-2"
        />
        {errors.phone && <ValidationMessage message={errors.phone} />}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LecturerForm;
