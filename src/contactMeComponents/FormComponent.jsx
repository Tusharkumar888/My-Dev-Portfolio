import React, { useState } from "react";
import emailjs from "emailjs-com";

function FormComponet() {
  // State for managing form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
const serviceId = "service_mlkhpb7"
const templateId ="template_ddrxxga"
const userId = "WIDdMBHJSjkO9iaT6"
  // Handle form submission
  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .send(
        serviceId, 
        templateId, 
        formData,
        userId
      )
      .then(
        (result) => {
          alert('Data has been sent successfuly');
           
        },
        (error) => {
          alert(error.text);
        }
      );

    //
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  }


  return (
    <>
      <form
        onSubmit={sendEmail}
        className="w-full "
        >
        {/* Form Title */}
        <h2 className="text-2xl font-bold text-black ">
          Contact Form
        </h2>
       <div className=" grid grid-cols-2 space-x-2 mb-4 ">

        {/* Full Name Field */}
        <div>

          <input
            type="text"
            id="fullName"
            name="fullName"
            autoComplete="username"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            />
        </div>

        {/* Email Field */}
        <div>

          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            />
        </div>

            </div>

        {/* Message Field (Textarea) */}
        <div>

          <textarea
            id="message"
            name="message"
            autoComplete="on"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            ></textarea>
        </div>

        {/* Submit Button */}
        <div className="w-full flex flex-row-reverse">
        <button
          type="submit"
          className="w-[143px] h-[41px] bg-orange-500 text-white font-semibold py-2 mx-2 hover:bg-customDark shadow-custom hover:shadow-orange-500 transition-all duration-500"
          >
          Send Message
        </button>
        </div>

      </form>
      </>

  );
}

export default FormComponet;
