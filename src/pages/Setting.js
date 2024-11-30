import React, { useState, useEffect } from "react";
import "../stylesheets/Setting.css";
import { AiFillEdit } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Setting({ onTabChange, profilePic, setProfilePic }) {
  const [activeTab, setActiveTab] = useState("editProfile");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    dob: null,
    presentAddress: "",
    permanentAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    onTabChange("settings");
  }, [onTabChange]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange("settings");
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newProfilePic = URL.createObjectURL(file);
      setProfilePic(newProfilePic); // Update the profile picture in the Dashboard
    }
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 chars long and contain at least one letter and number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted!", formData);
    }
  };

  return (
    <div className="settings-container">
      <div className="tabs-container">
        <button
          onClick={() => handleTabChange("editProfile")}
          className={activeTab === "editProfile" ? "tab active" : "tab"}
        >
          Edit Profile
        </button>
        <button
          onClick={() => handleTabChange("preferences")}
          className={activeTab === "preferences" ? "tab active" : "tab"}
        >
          Preferences
        </button>
        <button
          onClick={() => handleTabChange("security")}
          className={activeTab === "security" ? "tab active" : "tab"}
        >
          Security
        </button>
      </div>

      <div className="settings-data-container">
        {activeTab === "editProfile" && (
          <div className="tab-content">
            <form onSubmit={handleSubmit}>
              <div className="profile-input-container">
                <div className="profile-picture-container">
                  <label htmlFor="profilePicture" style={{ cursor: "pointer" }}>
                    <img
                      src={profilePic} // Use profilePic directly
                      alt="Profile"
                      className="profile-picture"
                    />
                    <AiFillEdit className="pencil-icon" />
                  </label>
                  <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    className="form-control"
                    onChange={handleProfilePictureChange}
                    style={{ display: "none" }}
                  />
                </div>

                <div className="input-fields-container">
                  <div className="row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Charlene Reed"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">User  Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Charlene Reed"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="charlenereed@gmail.com"
                      />
                      {errors.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="**********"
                      />
                      {errors.password && (
                        <span className="error-message">{errors.password}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth</label>
                      <DatePicker
                        selected={formData.dob}
                        onChange={handleDateChange}
                        dateFormat="dd MMMM yyyy"
                        placeholderText="25 January 1990"
                        className="form-control date-picker"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="presentAddress">Present Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="presentAddress"
                        value={formData.presentAddress}
                        onChange={handleChange}
                        placeholder="San Jose, California, USA"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="permanentAddress">Permanent Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleChange}
                        placeholder="San Jose, California, USA"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="San Jose"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="postalCode">Postal Code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="45962"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="USA"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="button-container">
                <button type="submit" className="save-button">
                  Save
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="tab-content">
            <p>Manage your preferences here.</p>
          </div>
        )}

        {activeTab === "security" && (
          <div className="tab-content">
            <p>Manage your security settings here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Setting;