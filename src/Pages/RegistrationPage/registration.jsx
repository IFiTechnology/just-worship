import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import formLogo from "../../Assets/JWLogoW.png";
import JW2023 from "../../Assets/JW23.jpeg";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./registration.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
    closestLandmark: "",
    city: "",
    state: "",
    referredBy: "",
    referralPhoneNumber: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your Airtable API endpoint URL
      const airtableEndpoint =
        "https://api.airtable.com/v0/appkL9EHAobXJFSLG/Data";

      // Airtable API Key
      const apiKey =
        "pat1k1Ce24UPhSJAG.bfbb7418032609372446c6b17af2cbece8f830ec83b2bd5a3ccb8d6b18a54e20";

      // Generate the current timestamp
      const registrationTimestamp = new Date().toUTCString();

      // Data to send to Airtable, including the timestamp
      const data = {
        fields: {
          "Full Name": formData.name,
          "Phone Number": formData.phoneNumber,
          "Email Address": formData.emailAddress,
          Address: formData.address,
          "Closest Landmark": formData.closestLandmark,
          City: formData.city,
          State: formData.state,
          "Who Referred You": formData.referredBy,
          "Referral Phone Number": formData.referralPhoneNumber,
          Timestamp: registrationTimestamp,
        },
      };

      // Send a POST request to Airtable
      const response = await axios.post(airtableEndpoint, data, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Display a success message using react-toastify
        toast.success(
          "🎉 Registration successful! 🎉",
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, // Close the message after 5 seconds
          }
        );

        // You can also reset the form fields if needed
        setFormData({
          name: "",
          phoneNumber: "",
          emailAddress: "",
          address: "",
          closestLandmark: "",
          city: "",
          state: "",
          referredBy: "",
          referralPhoneNumber: "",
        });
      } else {
        // Display an error message
        toast.error(
          "❌ Registration failed. Please try again. ❌",
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          }
        );
      }
    } catch (error) {
      // Handle any network or other errors
      toast.error(
        "❌ An error occurred. Please check your connection and try again later. ❌",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        }
      );
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="regForm">
        <div className="formCard">
          <div className="formImage">
            <img src={JW2023} alt="" />
          </div>
          <div className="form">
            <div className="formLogo">
              <div className="logoImg">
                <img src={formLogo} alt="" />
              </div>
              <h3>Just Worship 2023 Registration Form</h3>
            </div>
         
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <input
                  className="form-control"
                  placeholder="Full Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  className="form-control"
                  placeholder="Phone Number"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  className="form-control"
                  placeholder="Email Address"
                  type="text"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  className="form-control"
                  placeholder="Address"
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  className="form-control"
                  placeholder="Closest Landmark"
                  type="text"
                  id="closestLandmark"
                  name="closestLandmark"
                  value={formData.closestLandmark}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  className="form-control"
                  placeholder="City"
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  className="form-control"
                  placeholder="State"
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  className="form-control"
                  placeholder="Who Referred You"
                  type="text"
                  id="referredBy"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  className="form-control"
                  placeholder="Referral Phone Number"
                  type="tel"
                  id="referralPhoneNumber"
                  name="referralPhoneNumber"
                  value={formData.referralPhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="regBtn">
                <button className="btn" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default RegistrationForm;
