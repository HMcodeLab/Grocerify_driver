import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ReactComponent as Pic } from "../../assests/icons/pic.svg";
import { ReactComponent as User2 } from "../../assests/icons/user2.svg";

// work on stars

const Star = ({ selected, onSelect }) => {
  return (
    <FaStar
      color={selected ? "#FFD700" : "#A19797"}
      size={18}
      onClick={onSelect}
      style={{ cursor: "pointer" }}
    />
  );
};

const Feedback = ({ rating }) => {
  const [userRatings, setUserRatings] = useState(Array(5).fill(rating));

  const handleStarClick = (index) => {
    const newRatings = userRatings.map((r, i) => (i === index ? rating : r));
    setUserRatings(newRatings);
  };

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
        <div className="flex flex-col gap-4 px-[2%] mt-4">
          <p className="text-[#333333] text-[18px] font-Montserrat">Feedback</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {stars.map((star) => (
                    <FaStar
                      key={star}
                      color={star <= userRating ? "#FFD700" : "#A19797"}
                      size={18}
                      onClick={() => handleStarClick(star)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
