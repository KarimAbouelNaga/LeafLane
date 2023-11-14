import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleForgotPassword = () => {
    alert('forgot password')
    return
  }
  const checkAuthnetication = () => {
    console.log("hi gaurav")
     const details = localStorage.getItem("userData");
    const userDetails = JSON.parse(details);
    for (let i = 0; i < userDetails.length; i++)
    {
       if (userDetails[i].email === email && userDetails[i].password === password) {
        localStorage.setItem("currentUser", i);
         return true;
       }
      }
   
    return false
    
  }
  const handleLogin = () => {
  if (!email || !password) {
    alert("Please fill in all required fields");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }
    const check = checkAuthnetication(email, password)
    check ? alert("login success") : alert("Not a valid email or password");
    if (check) { navigate("/dashboard-mobility"); }  
     
  }
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-lato">
      <img
        className="absolute top-[0px] left-[0px] w-[1932px] h-[1499px]"
        alt=""
        src="/background1.svg"
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
      <b className="absolute top-[300px] left-[242px] text-31xl text-lightgreen-200">
        Login
      </b>
      <img
        className="absolute top-[364px] left-[190.5px] w-[223px] h-[23px]"
        alt=""
        src="/line-11.svg"
      />
      <Link
        to="/"
        className="absolute top-[300px] left-[496px] text-31xl opacity-[0.4]"
        style={{ textDecoration: "none", color: "#73CF82" }}
      >
        Sign up
      </Link>
      <div className="absolute top-[447px] left-[252px] rounded-11xl bg-whitesmoke shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[450px] flex flex-row items-center justify-between py-0 px-[26px] box-border">
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/person@2x.png"
        />
        <input
          type="email"
          className="relative w-full h-full outline-none text-xl bg-transparent p-4"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="absolute top-[547px] left-[252px] rounded-11xl bg-whitesmoke shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[450px] flex flex-row items-center justify-between py-0 px-[26px] box-border">
        <img
          className="relative w-[30px] h-[30px] object-cover"
          alt=""
          src="/unlock-private@2x.png"
        />
        <input
          type="password"
          className="relative w-full h-full outline-none text-xl bg-transparent p-4"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <b
        className="absolute top-[709px] left-[250px] text-lightgreen-200 cursor-pointer"
        onClick={handleForgotPassword}
      >
        Forgot Password?
      </b>
      <div
        className="absolute top-[691px] left-[502px] rounded-11xl bg-lightgreen-200 shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[200px] h-[60px] flex flex-col items-start justify-center py-0 px-16 box-border text-11xl text-white cursor-pointer"
        onClick={handleLogin}
      >
        <div className="relative font-light">Login</div>
      </div>
    </div>
  );
};

export default LoginPage;
