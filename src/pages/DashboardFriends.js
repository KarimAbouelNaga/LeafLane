import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
const DashboardFriends = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData(storedData);
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-text">
      <img
        className="absolute top-[0px] left-[0px] w-[1766px] h-[1441px]"
        alt=""
        src="/background1.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-lightgoldenrodyellow-200 w-[1440px] overflow-hidden flex flex-row items-center justify-between py-2 px-12 box-border text-base">
        <div className="flex flex-row items-center justify-start gap-[33px] pl-40">
          <Navbar />
        </div>
        {/* <div className="relative">Mobility</div> */}
        {/* <div className="relative">Rewards</div> */}
        {/* <div className="w-[220px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[18px] px-[68px] box-border text-center text-29xl text-white">
            <b className="self-stretch relative [-webkit-text-stroke:1px_#000]">
              LL
            </b>
          </div> */}
        {/* <div className="relative text-white [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Friends
          </div> */}
        {/* <div className="relative text-black-fonts-headings">Contact</div> */}
        {/* </div> */}
        {/* <img
          className="relative w-[35px] h-[35px] overflow-hidden shrink-0"
          alt=""
          src="/icon-pack.svg"
        /> */}
      </div>
      <div className="absolute top-[150px] left-[40px] rounded-28xl bg-lightgoldenrodyellow-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1026px] h-[822px]" />
      <div className="absolute top-[239px] left-[70px] rounded-28xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[966px] h-[709px]" />
      <b className="absolute top-[287px] left-[123px] inline-block w-[220px] h-[592px] ">
        {userData.map((userData, index) => (
          <p key={index} className="m-0">
            {userData.email}
          </p>
        ))}
      </b>
      <b className="absolute top-[287px] left-[780px] inline-block text-right w-[220px] h-[592px]">
        {userData.map((userData, index) => (
          <p key={index} className="m-0">
            {userData.rewards}
          </p>
        ))}
      </b>
      {/* <div className="absolute top-[321.5px] left-[122.5px] box-border w-[878px] h-px border-t-[1px] border-dashed border-gray" />
      <div className="absolute top-[468.5px] left-[122.5px] box-border w-[878px] h-px border-t-[1px] border-dashed border-gray" />
      <div className="absolute top-[422.5px] left-[122.5px] box-border w-[878px] h-px border-t-[1px] border-dashed border-gray" />
      <div className="absolute top-[372.5px] left-[122.5px] box-border w-[878px] h-px border-t-[1px] border-dashed border-gray" /> */}
      <div className="absolute h-[5.96%] w-[31.6%] top-[15.92%] right-[45.83%] bottom-[78.13%] left-[22.57%] rounded-31xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-center">
        <b className="absolute h-[56.39%] w-[20.66%] top-[22.62%] left-[6.15%] flex text-mediumseagreen items-center justify-center">
          FRIENDS
        </b>
        <div className="absolute top-[0px] left-[142px] w-[131px] h-[61px] overflow-hidden flex flex-row items-center justify-start pt-[13.774169921875px] px-0 pb-[12.790348052978516px] box-border gap-[37px]">
          <div className="relative box-border w-px h-[62px] border-r-[1px] border-solid border-gray" />
          <div className="relative font-semibold flex items-center justify-center w-[94px] h-[34.4px] shrink-0">
            REGION
          </div>
        </div>
        <div className="absolute top-[0px] left-[304px] w-[114px] h-[61px] overflow-hidden flex flex-row items-center justify-end pt-[13.774169921875px] px-0 pb-[12.790348052978516px] box-border gap-[20px]">
          <div className="relative box-border w-px h-[62px] border-r-[1px] border-solid border-gray" />
          <div className="relative font-semibold flex items-center justify-center w-[94px] h-[34.4px] shrink-0">
            WORLD
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFriends;
