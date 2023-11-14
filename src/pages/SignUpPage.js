import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const saveToLocalStorage = (email, phone, password) => {
    const userData = {
      email,
      phone,
      password,
      rewards:0,
      mobilitydata:[],
    };
    const userDetails = JSON.parse(localStorage.getItem("userData")) || [];
    for (let i = 0; i < userDetails.length; i++) {
      if (userDetails[i].email === email) {
        alert("User with the same email already exists!");
        return;
      }
    }
    console.log(userDetails);
    userDetails.push(userData);
    localStorage.setItem("userData", JSON.stringify(userDetails));
  };
  const nav = () => {
    navigate("/login-page");
  }
  const handleSubmit = () => {
    if (!email || !phone || !password) {
      alert("Please fill in all required fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    alert("Registered Successfully");

    // Navigate("/login-page");

    saveToLocalStorage(email, phone, password);
    setEmail("");
    setPhone("");
    setPassword("");
    // Navigate("/login-page");
    nav();
  };
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-lato">
      <img
        className="absolute top-[0px] left-[0px] w-[1932px] h-[1499px]"
        alt=""
        src="/background.svg"
      />
      <div className="absolute top-[calc(50%_-_400px)] left-[calc(50%_-_600px)] bg-white shadow-[-10px_10px_40px_rgba(0,_0,_0,_0.5)] w-[1200px] h-[800px] overflow-hidden text-center text-77xl text-lightgreen-100 font-bebas-neue">
        <div className="absolute top-[calc(50%_-_425px)] left-[650px] rounded-[50%] bg-darkkhaki w-[850px] h-[850px] opacity-[0.25]" />
        <div className="absolute top-[calc(50%_-_425px)] left-[750px] rounded-[50%] bg-lightgreen-100 w-[850px] h-[850px] opacity-[0.5]" />
        <img
          className="absolute top-[0px] left-[858px] rounded-402xl-5 w-[907px] h-[850px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] tracking-[0.1em] flex items-center justify-center w-[592px] h-[173px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          LeafLane
        </div>
      </div>
      <Link
        to="/login-page"
        className="absolute top-[300px] left-[242px] text-31xl opacity-[0.4]"
        style={{ textDecoration: "none", color: "#73CF82" }}
      >
        Login
      </Link>
      <img
        className="absolute top-[364px] left-[465.5px] w-[223px] h-[23px]"
        alt=""
        src="/line-1.svg"
      />
      <b className="absolute top-[300px] left-[496px] text-31xl text-lightgreen-100">
        Sign up
      </b>
      <div className="absolute top-[447px] left-[252px] rounded-11xl bg-whitesmoke shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[450px] h-[60px] flex flex-row items-center justify-start py-0 px-[26px] box-border gap-[26px]">
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/person@2x.png"
        />
        <input
          type="email"
          className="relative w-full h-full outline-none text-xl bg-transparent"
          placeholder="Email*"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="absolute top-[547px] left-[252px] rounded-11xl bg-whitesmoke shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[450px] h-[60px] flex flex-row items-center justify-start py-0 px-[26px] box-border gap-[26px]">
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/phone@2x.png"
        />
        <input
          type="number"
          className="relative w-full h-full outline-none text-xl bg-transparent"
          placeholder="Phone*"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div className="absolute top-[647px] left-[252px] rounded-11xl bg-whitesmoke shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[450px] h-[60px] flex flex-row items-center justify-start py-0 px-[26px] box-border gap-[26px]">
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/unlock-private@2x.png"
        />
        <input
          type="password"
          className="relative w-full h-full outline-none text-xl bg-transparent"
          placeholder="Password*"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div
        className="absolute top-[747px] left-[502px] rounded-11xl bg-lightgreen-100 shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[200px] h-[60px] flex flex-col items-center justify-center text-11xl text-white cursor-pointer"
        onClick={(handleSubmit)}
      >
        <div className="relative font-light">Sign-up</div>
      </div>
    </div>
  );
};

export default SignUpPage;
