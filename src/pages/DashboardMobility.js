import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Navbar from "../component/navbar";
const DashboardMobility = () => {
  const [usedValue, setUsedValue] = useState("");
  const [insteadOfValue, setInsteadOfValue] = useState("");
  const [distance, setDistance] = useState("");
  const [open, setOpen] = React.useState(false);
  const [mobilityData1, setMobilityData1] = useState([]);
  
  
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("userData")) || [];
      const currentIndex = +localStorage.getItem("currentUser")
      setMobilityData1(storedData[currentIndex].mobilitydata);
      console.log("hello gaurav");
    }, []);
  
  // const setScore = ()=>{
    // const data = localStorage.getItem('userData');
    // clg
  // }
  

    // const [sample, setSample] = React.useState([
  //   {
  //     current: "cycle",
  //     instead: "bus",
  //   },
  //   {
  //     current: "bike",
  //     instead: "train",
  //   },
  //   {
  //     current: "cycle",
  //     instead: "car",
  //   },
  // ]);
  const saveIntoLocal = (current, instead) => {
    const mobilityData = {
      current,
      instead,
      distance,
      points:distance*2,
    }
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data)
    const currentUserIndex = +localStorage.getItem("currentUser");
    const user = data[currentUserIndex]
    user.mobilitydata.push(mobilityData)
    user.rewards = user.rewards + mobilityData.points;
    localStorage.setItem('userData', JSON.stringify(data));

    //  const mobilityDetails = JSON.parse(localStorage.getItem("mobilityData")) || [];
    // mobilityDetails.push(mobilityData);
    //  localStorage.setItem("mobilityData", JSON.stringify(mobilityDetails));

  };
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Handle Click");
    setOpen(true);
  };
  const handleSubmit = (e) => {
    e.stopPropagation();
    saveIntoLocal(usedValue, insteadOfValue)
    // window.location.reload()
    // setSample([...sample, { current: usedValue, instead: insteadOfValue }]);
    setOpen(false);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    console.log("Handle Close");
    setOpen(false);
  };

const DynamicDivs = ({ data }) => {
  return (
    data &&
    data.length > 0 &&
    data.map((data, index) => (
      <div
        key={index}
        className="relative h-[150px] w-[850px] p-2 m-10 rounded-28xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-xl"
      >
        <div className="absolute h-1/5 w-[5.89%] top-[40%] left-[3.46%] flex items-center font-bold">
          Used
        </div>
        <div className="absolute h-[50px] w-[8.89%] top-[42%] right-[80.72%] bottom-[30%] left-[14.32%] max-w-full overflow-hidden max-h-full object-cover">
          {data.current}
        </div>
        <div className="absolute top-[59px] left-[211px] w-[198px] h-[37px] overflow-hidden flex flex-row items-center justify-end">
          <div className="relative flex items-center w-[141px] h-8 shrink-0 top-[20%] font-bold">
            Instead of
          </div>
          <div className="relative w-[141px] h-[37px] top-[30%] object-cover">
            {data.instead}
          </div>
        </div>
        <div className="absolute top-[0px] left-[480px] w-[147px] h-40 overflow-hidden text-center text-9xl text-lime">
          <div className="absolute h-[100.63%] w-[0.68%] top-[-0.31%] right-[99.66%] bottom-[-0.31%] left-[-0.34%] box-border border-r-[1px] border-dashed border-black" />
          <b className="absolute h-[37.5%] w-[75.51%] top-[31.25%] left-[24.49%] flex items-center justify-center">
            {/* 280 KM */}
            {data.distance}
          </b>
        </div>
        <div className="absolute top-[0px] left-[664px] w-[157px] h-40 overflow-hidden flex flex-row items-center justify-end py-[50px] px-0 box-border gap-[46px] text-center text-9xl text-lime">
          <div className="relative box-border w-px h-[161px] border-r-[1px] border-dashed border-black" />
          <b className="relative flex items-center justify-center w-[111px] h-[60px] shrink-0">
            {/* 560 Pts */}
            {data.points}
          </b>
        </div>
      </div>
    ))
  );
};
    


  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-black font-text">
      <img
        className="absolute top-[0px] left-[0px] w-[1766px] h-[1441px]"
        alt=""
        src="/background1.svg"
      />

      {/* top of the page */}
      <div className="absolute top-[0px] left-[0px] bg-lightgoldenrodyellow-200 w-[1440px] overflow-hidden flex flex-row items-center justify-between py-2 px-12 box-border text-base">
        <div className="flex flex-row items-center justify-start gap-[33px] pl-40">
          <Navbar />
        </div>
        <img
          className="relative w-[35px] h-[35px] overflow-hidden shrink-0"
          alt=""
          src="/icon-pack.svg"
        />
      </div>

      <div className="absolute top-[150px] left-[50px] rounded-28xl bg-lightgoldenrodyellow-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[963px] h-[822px] overflow-scroll ">
        <DynamicDivs data={mobilityData1} />
        <div className="relative h-[200px] w-[200px] rounded-[50%] left-[44.12%] bg-white flex items-center justify-center text-6xl">
          <AddCircleOutlineIcon
            className="text-black-500 cursor-pointer"
            onClick={handleClick}
            style={{ fontSize: "15em", color: "black" }}
          />
        </div>
      </div>
      <React.Fragment>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className="bg-green-400 text-white text-2xl font-bold w-[20rem]  ">
            INPUT FIELD
          </DialogTitle>
          <DialogContent className="p-4 w-[20rem]">
            <TextField
              autoFocus
              margin="dense"
              id="used"
              label="Used"
              type="text"
              fullWidth
              variant="outlined"
              value={usedValue}
              onChange={(e) => setUsedValue(e.target.value)}
              className="mb-2"
            />
            <TextField
              margin="dense"
              id="insteadOf"
              label="Instead of"
              type="text"
              fullWidth
              variant="outlined"
              value={insteadOfValue}
              onChange={(e) => setInsteadOfValue(e.target.value)}
            />
            <TextField
              margin="dense"
              id="distance"
              label="Distance"
              type="number"
              fullWidth
              variant="outlined"
              inputProps={{ min: 1, max: 1000 }}
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </DialogContent>
          <DialogActions
            style={{ alignItem: "center", justifyContent: "center" }}
          >
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 cursor-pointer hover:bg-green-600"
            >
              Submit
            </button>
            <button
              onClick={handleClose}
              className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600"
            >
              Cancel
            </button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      {/* </div> */}

      <img
        className="absolute top-[150px] left-[1073px] rounded-31xl w-[323px] h-[313px]"
        alt=""
        src="/rectangle-8.svg"
      />
      <img
        className="absolute top-[166px] left-[1093px] rounded-31xl w-[283px] h-[274px]"
        alt=""
        src="/rectangle-9.svg"
      />
      <img
        className="absolute top-[205px] left-[1137px] w-[196px] h-[196px] object-cover"
        alt=""
        src="/image-6@2x.png"
      />
      <div className="absolute top-[517.7px] left-[1074.7px] rounded-31xl bg-lightgoldenrodyellow-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[312.1px] h-[457.9px] [transform:_rotate(-0.64deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[539.6px] left-[1091.6px] rounded-31xl w-[282px] h-[410.6px]"
        alt=""
        src="/rectangle-11.svg"
      />
      <b className="absolute top-[541px] left-[1125px] flex text-center items-center justify-center w-52 h-[43px]">
        Your Recap
      </b>
      <b className="absolute top-[646px] left-[1125px] inline-block w-[161px] h-[171px]">
        <p className="m-0">Footprint Reduction:</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">Distance Travelled:</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">Steps:</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">Calories Burned:</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">Cost Savings:</p>
        <p className="m-0">&nbsp;</p>
      </b>
    </div>
  );
};

export default DashboardMobility;
