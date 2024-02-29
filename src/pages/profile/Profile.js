import React, { useState } from "react";
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { ReactComponent as Pic } from "../../assests/icons/pic.svg";
import { ReactComponent as User2 } from "../../assests/icons/user2.svg";

const Profile = ({ rating }) => {
    const [userRating, setUserRating] = useState(rating);
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  
    const handleStarClick = (clickedStar) => {
      // You can add logic here to send the new rating to your backend or perform other actions
      setUserRating(clickedStar);
    };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 w-[430px] h-[840px] my-[3%] px-[1%] py-[1%] overflow-y-auto">
        {/* head */}
        <div className="flex flex-row gap-24">
          <Link to={"/myactivity"} className="text-[#000000] text-5xl font-bold"> {" < "} </Link>
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
            <p className="text-[#777777] text-[14px] font-Montserrat">4.5</p>
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

        {/* feedback */}
        <div className="flex flex-col gap-4 px-[2%] mt-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                My Info
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Name and emails</p>
              </div>
              <Link to={"/myInfo"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                Contacts
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Phone  Numbers</p>
              </div>
              <Link to={"/contact"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                Address Information
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Address , phone &emails</p>
              </div>
              <Link to={"/address"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                My Stats
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">My ride history</p>
              </div>
              <p className="text-2xl font-bold"> {" > "} </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                Earning
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Balance & Payout</p>
              </div>
              <Link to={"/earnings"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between shadow-md py-3 px-4 items-center">
              <div className="flex flex-col">
                <p className="text-[#000000] text-[18px] font-Montserrat font-bold">
                Feedback
                </p>
                <p className="text-[#000000] text-[12px] font-Montserrat ">Overview</p>
              </div>
              <Link to={"/feedback"} className="text-2xl font-bold"> {" > "} </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
