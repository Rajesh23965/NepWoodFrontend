import React, { useState } from "react";
import emailjs from "emailjs-com";
import CareerImage from "../../assets/Career.webp";
import CareerFunny from "../../assets/Career.png";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, file } = formData;

    if (!file) {
      alert("Please upload your resume before submitting.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("file", file);

    emailjs
      .sendForm(
        "service_87c1vq8",
        "template_duzsnvt",
        e.target,
        "30u12neXrVNQfH5uX"
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        alert("Your resume has been submitted successfully!");
      })
      .catch((error) => {
        console.error("There was an error sending the email:", error);
        alert("Failed to send your resume. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col px-4 lg:px-8">
      {/* Hero Section */}
      <div className="relative mb-16 -mt-32 w-full">
        <img
          src={CareerImage}
          alt="slider"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">Career</h1>
        </div>
      </div>

      {/* Career Information */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          Careers
        </h2>
        <p className="mt-4 text-lg text-black">
          Join the Nepwood family and become a part of a dynamic, innovative
          team. We are always on the lookout for talented individuals who share
          our passion for quality craftsmanship and sustainability.
        </p>
      </div>
      <img src={CareerFunny} alt="Career Funny" className="mb-8 mx-auto" />

      {/* Application Form */}
      <div className="max-w-8xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 grid gap-4 sm:grid-cols-2"
        >
          {/* Name Field */}
          <div>
            <label className="block text-gray-900 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 border-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-900 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 border-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* File Upload */}
          <div className="sm:col-span-2">
            <label className="block text-gray-900 text-sm font-medium mb-2">
              Upload Your Resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              name="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border-2 border-gray-600 rounded-md focus:outline-none"
              required
            />
            <p className="mt-2 text-sm text-gray-500">
              Accepted file types: .pdf, .doc, .docx
            </p>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full h-12 px-3 py-2 bg-green-600 text-white font-extrabold rounded-md hover:bg-green-700 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Career;
