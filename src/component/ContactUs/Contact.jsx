import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactImage from "../../assets/ContactImage.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import Funny from "../../assets/funny.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    quote: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value ? "" : "Name is required.";
      case "email":
        return value
          ? /\S+@\S+\.\S+/.test(value)
            ? ""
            : "Email address is invalid."
          : "Email is required.";
      case "phone":
        return value ? "" : "Phone number is required.";
      case "message":
        return value ? "" : "Message is required.";
      case "quote":
        return value ? "" : "Please provide details for the quote.";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    for (const field in formData) {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await emailjs.send(
          "service_87c1vq8",
          "template_duzsnvt",
          formData,
          "30u12neXrVNQfH5uX"
        );
        setSuccessMessage("Your message has been sent successfully!");
        setTimeout(() => setSuccessMessage(""), 5000);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          quote: "",
        });
      } catch (error) {
        console.error("Error sending message:", error);
        setSuccessMessage("Failed to send the message. Please try again later.");
      }
    }
  };

  return (
    <section className="relative flex-col md:flex-row justify-between px-4 lg:px-8">
      <div className="relative mb-16 -mt-32 slider-container mx-auto max-w-full">
        <img
          src={ContactImage}
          alt="slider"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="relative mb-14">
        <div className="bg-white max-w-7xl mx-auto">
          <div className="p-12 border-2 flex lg:flex-row flex-col border-green-300 bg-white rounded-tr-[5rem] rounded-tl-[5rem] rounded-br-[5rem]">
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-semibold text-green-600 mb-4">
                Nep Wood Flooring & Panelling
              </h3>
              <p className="text-gray-800 mb-6">
                Kathmandu, Nepal, Baneshwor, 45700
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-green-600 text-2xl mr-4" />
                  <Link to="tel:+9779800000000" className="text-lg">
                    +977 9800000000
                  </Link>
                </div>
                <div className="flex items-center">
                  <CiMail className="text-green-600 text-2xl mr-4" />
                  <Link to="mailto:info@nepwood.com" className="text-lg">
                    info@nepwood.com
                  </Link>
                </div>
                <img src={Funny} alt="Contact Visual" className="w-full h-80" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-gray-800">
                Get in Touch with Us
              </h2>
              <p className="text-gray-600">
                Have a question or need a quote? We’re here to help! Reach out
                using the form below or contact us directly.
              </p>
              {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {["name", "email", "phone", "message", "quote"].map((field, idx) => (
                  <div key={idx}>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-400 rounded-xl focus:ring-2 focus:ring-green-500"
                    />
                    {errors[field] && <p className="text-red-500">{errors[field]}</p>}
                  </div>
                ))}
                <button
                  type="submit"
                  className="rounded-tr-[2rem] rounded-tl-[2rem] rounded-br-[2rem] bg-green-600 text-white px-8 py-3  hover:bg-green-700 transition duration-300 w-full lg:w-auto"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45625.1518547561!2d85.28493282212966!3d27.70895425214892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2z4KSV4KS-4KSg4KSu4KS-4KSh4KWM4KSBIDQ0NjAw!5e1!3m2!1sne!2snp!4v1729579552571!5m2!1sne!2snp"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
