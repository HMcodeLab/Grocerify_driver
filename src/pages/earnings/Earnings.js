import React from "react";
import { Link } from "react-router-dom";

// last 3 data
// cash out

const Earnings = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-6 w-[430px] h-[840px] my-[3%] px-[1%] py-[1%] overflow-y-auto">
        {/* head */}
        <div className="flex flex-row gap-20 items-end">
          <Link
            to={"/profile"}
            className="text-[#000000] text-5xl font-bold pb-1"
          >
            {" "}
            {" < "}{" "}
          </Link>
          <p className="text-[#333333] text-[32px] font-Gorditas ">Earnings</p>
        </div>

        {/*  */}
        <div className="flex flex-row justify-between px-8">
          <div className="flex flex-col items-center">
            <p className="text-[#333333] text-[16px] font-Montserrat font-extrabold">Date</p>
            <p className="text-[#333333A3] text-[12px] font-Montserrat">Mar 25, 2021</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#333333] text-[16px] font-Montserrat font-extrabold">Experience</p>
            <p className="text-[#333333A3] text-[12px] font-Montserrat">6 Years</p>
          </div>
        </div>

        {/* cash */}
        <div className="flex flex-row justify-between items-center px-4">
          <div className="flex flex-col items-center rounded-3xl shadow-xl px-4 py-6">
            <p className="text-[#848484] text-[27.22px] font-Montserrat font-bold">₹43,300</p>
            <p className="text-[#333333] text-[25.22px] font-Montserrat font-bold">Total Earning</p>
          </div>
          <button className="text-[#FFFFFF] text-[21.3px] font-Montserrat font-semibold bg-[#58B310] h-[34px] px-4 rounded-xl">Cash Out</button>
        </div>

        {/*  */}
        <div className="flex flex-col rounded-3xl shadow-lg px-8 py-8 mx-4 my-4 gap-8">
          <div className="flex flex-col">
            <p className="text-[#333333] text-[20px] font-Montserrat font-semibold">Today’s Earnings</p>
            <p className="text-[#333333A3] text-[14px] font-Montserrat font-semibold">Mon, 11 March</p>
          </div>
          <div className="flex flex-row justify-between px-2">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[#333333] text-[20px] font-Montserrat font-black">₹400</p>
              <p className="text-[#333333A3] text-[14px] font-Montserrat font-semibold">Total</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-[#333333] text-[20px] font-Montserrat font-black">50</p>
              <p className="text-[#333333A3] text-[14px] font-Montserrat font-semibold">Rides</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-[#333333] text-[20px] font-Montserrat font-black">8:30</p>
              <p className="text-[#333333A3] text-[14px] font-Montserrat font-semibold">Online HRS</p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col gap-2 px-4">
          <div className="text-[#333333] text-[16px] font-Montserrat font-semibold px-5 py-4 justify-center rounded-xl shadow-lg">See Daily details</div>
          <div className="text-[#333333] text-[16px] font-Montserrat font-semibold px-5 py-4 justify-center rounded-xl shadow-lg">See weekly details</div>
          <div className="text-[#333333] text-[16px] font-Montserrat font-semibold px-5 py-4 justify-center rounded-xl shadow-lg">See Driver Payment Dashboard</div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
