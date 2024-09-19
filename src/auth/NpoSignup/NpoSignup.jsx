import React, { useState } from "react";
import "./NpoSignup.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NpoSignup = ({ setActiveSignupPage }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const formData = {
    organizationName,
    registrationNumber,
    phoneNumber,
    email,
    password,
  };
  console.log(formData);

  const handleBtn = () => {
    if (
      !organizationName ||
      !registrationNumber ||
      !phoneNumber ||
      !password ||
      !email
    ) {
      // alert("details is required");
      toast.error("details is required");
    } else {
      setLoading(true);
      const url = "https://kindraise.onrender.com/api/v1/sign-up";
      const data = {
        organizationName,
        registrationNumber,
        phoneNumber,
        email,
        password,
      };
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          toast.success(res?.data?.message);
          setLoading(false);
          // localStorage.setItem("userData",)
          // localStorage.setItem('userToken',res?.data?.token)

          // localStorage.setItem("userData", JSON.stringify(res?.data?.data))
          setActiveSignupPage("D");
          navigate("/login");
        })
        .catch((err) => {
          setLoading(false);
          // Log the full error response for debugging
          console.error(err);
          // Check if the error response exists and show a specific message
          const errorMessage = err.response?.data?.message || "An error occurred";
          toast.error(errorMessage);

          setActiveSignupPage("C");
        });
      // Nav('/login')
    }
  };

  return (
    <>
      <div className="npoSignUpBody">
        <div className="signupLoginBox">
          Already have an account?<span onClick={() => Nav("/")}>Sign in</span>
        </div>
        <div className="indSignupInputBox">
          <h1 className="indSignupQusBox">Tell us about your self</h1>
          <div className="indInputHoldBox">
            Non-profit Name
            <input
              type="text"
              onChange={(e) => setOrganizationName(e.target.value)}
            />
          </div>
          <div className="indInputHoldBox">
            RC Numcer
            <input
              type="text"
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
          </div>
          <div className="indInputHoldBox">
            Email Address
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="indInputHoldBox">
            Phone Number
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="indInputHoldBox">
            Password
            <div className="signupInputClone">
              <input
                type={show ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              {show ? (
                <BsEyeSlash cursor="pointer" onClick={() => setShow(false)} />
              ) : (
                <BsEye cursor="pointer" onClick={() => setShow(true)} />
              )}
            </div>
          </div>
          <div className="signupPassHintBox">
            Your Password must have:
            <span>
              At least 8 characters, 1 uppercase letter, 1 lowercase letter and
              1 number
            </span>
          </div>
          <div className="TermsBox">
            <input type="checkbox" name="" id="" /> I have read and agree to the
            Terms and Use and Private Policy
          </div>
          <button className="signupIndCreateBtn" onClick={handleBtn}>
            {loading ? "Loading..." : "Create Account"}
          </button>
        </div>
        <div className="mediaSignupLoginBox">
          Already have an account?<span onClick={() => Nav("/")}>Sign in</span>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default NpoSignup;
