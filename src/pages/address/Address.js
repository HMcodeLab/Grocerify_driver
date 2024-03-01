import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ReactComponent as Pic } from "../../assests/icons/pic.svg";
import { ReactComponent as Pencil } from "../../assests/icons/pencil.svg";
import { ReactComponent as Loc } from "../../assests/icons/location.svg";
import { ReactComponent as Add } from "../../assests/icons/add.svg";

const Address = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 w-[430px] h-[840px] my-[3%] px-[1%] py-[1%] overflow-y-auto">
        {/* head */}
        <div className="flex flex-row gap-24">
          <Link to={"/profile"} className="text-[#000000] text-5xl font-bold">
            {" "}
            {" < "}{" "}
          </Link>
          <div className="flex flex-col items-center gap-1 pt-4">
            <Pic />
            <p className="text-[#303030] text-[16px] font-Montserrat font-bold">
              Utku Kenagzai
            </p>
            <p className="text-[#303030] text-[16px] font-Montserrat">
              Shift status: <span className="text-[#06B178]">Active</span>
            </p>
            <p className="text-[#777777] text-[12px] font-Montserrat">
              #utku1969
            </p>
          </div>
        </div>

        {/* nav */}
        <div className="flex flex-row justify-between px-[2%]">
          <div className="flex flex-col items-center">
            <p className="text-[#333333] text-[16px] font-Montserrat font-semibold">
              Total Rides
            </p>
            <p className="text-[#777777] text-[14px] font-Montserrat">121</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#333333] text-[16px] font-Montserrat font-semibold">
              Rating
            </p>
            <p className="text-[#777777] text-[14px] font-Montserrat flex flex-row gap-1 items-center">4.5<span><FaStar color="#FFC300" /></span></p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#333333] text-[16px] font-Montserrat font-semibold">
              Experience
            </p>
            <p className="text-[#777777] text-[14px] font-Montserrat">
              6 Years
            </p>
          </div>
        </div>

        {/* contact */}
        <div className="flex flex-col gap-6 mx-2 px-[3%] py-[4%] mt-4  rounded-md shadow-md">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-2">
                <Loc className="w-[30px] h-[30px]" />
                <div className="flex flex-col">
                    <p className="text-[#333333] text-[18px] font-Montserrat leading-6">150th Street, Near Cascade Restaurant</p>
                </div>
            </div>
            <div>
                <Pencil className="w-[25px] h-[25px]" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-2">
                <Add className="w-[30px] h-[25px]" />
                <div className="flex flex-col">
                    <p className="text-[#333333] text-[18px] font-Montserrat">Add Address</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address