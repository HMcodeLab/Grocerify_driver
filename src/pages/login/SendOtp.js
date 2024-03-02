import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SendOTP = () => {
  const navigate = useNavigate();

  const handleOtp = () => {
    navigate("/myActivity");
  };
  
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-col gap-10 w-[430px] h-[840px] my-[3%] py-[5%] overflow-y-auto bg-white">
        <div className="flex flex-row gap-24 items-start px-4">
          <Link to={"/"} className="text-[#333333] text-2xl font-extrabold">{" < "}</Link>
          <p className="flex text-[#333333] text-[23.68px] font-Gorditas font-semibold pb-2">
          Enter OTP
          </p>
        </div>
        <div className="flex flex-col gap-2 px-10">
          <p className="flex justify-center text-[#323030] text-[16px]">OTP sent to your mobile number...</p>
          <div className="flex flex-row shadow-xl">
            <input
              type="password"
              placeholder="OTP*"
              name="password"
              className=" h-[45.68px] w-[80%] text-[#A19797] text-[14.19px] font-Montserrat px-2 outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="text-[#FFFFFF] text-[20px] h-[40px] font-Montserrat bg-[#58B310] rounded-xl px-5 hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={handleOtp}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendOTP