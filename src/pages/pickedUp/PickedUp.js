import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import MapImg from "../../assests/images/map.png";
import DeliverImg from "../../assests/images/deliver.png";

// delivered - pop up (done) ------- back to orders(my activity)

const PickedUp = () => {
  const navigate = useNavigate();

  const [isPickedup, setPickedup] = useState(false);
  const openPickedup = () => {
    setPickedup(true);
  };

  const closePickedup = () => {
    setPickedup(false);
    navigate("/myActivity");
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div
        className={`flex flex-col w-[430px] h-[840px] my-[3%] overflow-y-auto scrollable-content bg-white ${
          isPickedup ? "blur" : ""
        }`}
      >
        <Header />
        <div
          className="flex flex-col justify-end"
          style={{
            backgroundImage: `url(${MapImg})`,
            backgroundPosition: "center",
            width: "430px",
            height: "932px",
          }}
        >
          <div className="bg-[#FFFFFF] flex flex-row px-5 py-8">
            <div className="flex flex-col gap-6">
              <p className="text-[#333333] text-[16px] font-Montserrat font-semibold leading-5 w-[70%]">
                5728+C56 - Al Quoz -Al Quoz 2 - India
              </p>
              <p className="text-[#333333] text-[16px] font-Montserrat font-semibold leading-5 w-[70%]">
                2min
              </p>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <button className="text-[#FFFFFF] text-[16px] font-Inter bg-[#58B310] rounded-lg px-6 py-1"
                onClick={openPickedup}>
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
      {isPickedup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ">
          <div className=" bg-white bg-opacity-90 rounded-3xl flex flex-col w-[352px] h-[514.46px] justify-end"
          style={{
            backgroundImage: `url(${DeliverImg})`,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}>
            
            <div className="flex flex-col gap-2 justify-center items-center bg-[#FFFFFF] rounded-3xl w-full h-[200.28px]">
              <p className="text-[#000000] text-[18px] font-semibold font-Montserrat">WELL DONE UTKU!</p>
              <p className="text-[#000000] text-[16px] font-semibold font-Montserrat">You just delivered order #UP295YH!</p>
              <button
                className="text-[#FFFFFF] text-[16px] font-Montserrat bg-[#57AF11] rounded-lg px-4 mt-4 h-[40.98px] w-[220px]"
                onClick={closePickedup}
              >
                BACK TO THE ORDERS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PickedUp