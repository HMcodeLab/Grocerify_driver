import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import MapImg from "../../assests/images/map2.png";
import { ReactComponent as Loc } from "../../assests/icons/location.svg";
import { ReactComponent as Burger } from "../../assests/icons/burger.svg";
import { ReactComponent as Bank } from "../../assests/icons/bank2.svg";
import { ReactComponent as Note } from "../../assests/icons/note.svg";

// decline - back myactivity
// accept - map1

const Accept = () => {
  const navigate = useNavigate();
  const [isAccept, setAccept] = useState(false);
  const openAccept = () => {
    setAccept(true);
    navigate("/map1");
  };
  const [isDecline, setDecline] = useState(false);
  const openDecline = () => {
    setDecline(true);
    navigate("/myActivity");
  };
  

  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col w-[430px] h-[840px] my-[3%] overflow-y-auto scrollable-content`}
      >
        <Header />
        <div
          className="flex flex-col justify-end"
          style={{
            backgroundImage: `url(${MapImg})`,
            backgroundPosition: "top",
            width: "430px",
            height: "220px",
          }}
        ></div>
        <div className="bg-[#FFFFFF] flex flex-col px-8 py-8 rounded-t-3xl shadow-lg gap-6">
          <div className="flex justify-center">
            <p className="text-[#303030] text-[16.39px] font-Inter text-center font-bold">
              Bashir Siddiqui
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#303030] text-[14px] font-Montserrat font-semibold pl-10">
              #UP295YH
            </p>
            <div className="flex flex-row items-center gap-3">
              <Loc className="w-[20px] h-[20px]" />
              <p className="text-[#303030] text-[14px] font-Montserrat leading-5 w-[70%]">
                Abdulla Omran Tayram St,Al Thanyah 1, Tecom Dubai{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <Burger className="w-[20px] h-[20px]" />
                <p className="text-[#303030] text-[14px] font-semibold font-Montserrat">
                  Customer order{" "}
                </p>
              </div>
              <div className="flex flex-col gap-1 px-16">
                <div className="flex flex-row justify-between">
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    Chic. Hamb.
                  </p>
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    2
                  </p>
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    200Rs
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    Chic. Hamb.
                  </p>
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    2
                  </p>
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    20Rs
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    Chic. Hamb.
                  </p>
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    2
                  </p>
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    100Rs
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    Chic. Hamb.
                  </p>
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    1
                  </p>
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    50Rs
                  </p>
                </div>
                <hr className="border-solid border-[#000000] border-[1px] my-2" />
                <div className="flex flex-row justify-between">
                  <p className="text-[#000000] text-[14px] font-Montserrat font-bold">
                    Total
                  </p>
                  <p className="text-[#000000] text-[14px] font-Montserrat font-bold">
                    750Rs
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Bank className="w-[30px] h-[30px]" />
              <p className="text-[#000000] text-[14px] font-Montserrta">
                Debit card - <span className="text-[#06B178]"> paid </span>
              </p>
            </div>
            <div className="flex flex-row gap-2 mx-10">
              <Note className="w-[30px] h-[30px]" />
              <div className="flex flex-col">
                <p className="text-[#303030] text-[14px] font-Inter">
                  Please call me when you at the reception, I will go downstairs
                  and pick the food.
                </p>
                <p className="text-[#540C97] text-[11px] font-Inter">
                  Translate
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-8 my-2">
              <button className="text-[#FFFFFF] text-[14px] font-Inter bg-[#57AF11] rounded-lg h-[30px] w-[100px]"
              onClick={openAccept}>
                ACCEPT
              </button>
              <button className="text-[#333333] text-[14px] font-Inter bg-[#C7C3CA] rounded-lg h-[30px] w-[100px]"
              onClick={openDecline}>
              DECLINE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accept;
