import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Dob } from "../../assests/icons/calender.svg";
import { ReactComponent as Upload } from "../../assests/icons/upload.svg";
import Bg from "../../assests/images/bg.png";

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState("");
  const datePickerRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUploadIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleDateIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.click();
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div
        className="flex flex-col gap-8 w-[430px] h-[840px] my-[3%] pb-60 pt-6 overflow-y-auto scrollable-content bg-white"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "300px auto",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <div className="flex flex-row gap-10 pl-2">
          <Link
            to={"/"}
            className="text-[#333333] text-4xl font-Gorditas font-bold"
          >
            {" "}
            {" < "}{" "}
          </Link>
          <p className="text-[#333333] text-[23.68px] w-[70%] font-Gorditas font-semibold flex text-center">
            Register yourself as a Delivery Partner
          </p>
        </div>

        {/* fields */}
        <div className="flex flex-col gap-6 px-5">
          {/* First name */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              First Name
            </p>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className=" h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
          </div>
          {/* Last name */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              Last Name
            </p>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className=" h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
          </div>
          {/* Address */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              Address
            </p>
            <input
              type="text"
              placeholder="Address"
              name="email"
              className=" h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
          </div>
          {/* Date Of Birth */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              Date Of Birth
            </p>
            <div className="flex flex-row shadow-xl justify-between items-center ">
              <input
                type="date"
                placeholder="Date Of Birth"
                name="date"
                value={selectedDate === null ? "" : selectedDate}
                onChange={handleDateChange}
                ref={datePickerRef}
                className=" h-[45.68px] w-full text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
              />
              {/* <Dob onClick={handleDateIconClick} className="cursor-pointer" /> */}
            </div>
          </div>
          {/* Age */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">Age</p>
            <input
              type="text"
              placeholder="Age"
              name="email"
              className=" h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
          </div>
          {/* Gender */}
          <div className="flex flex-col gap-3">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              Gender
            </p>
            <div className="flex flex-row gap-8">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" value="female" />
                <span className="text-[#A19797] text-[14.19px] font-Montserrat">
                  Female
                </span>
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" value="male" />
                <span className="text-[#A19797] text-[14.19px] font-Montserrat">
                  Male
                </span>
              </label>
            </div>
          </div>
          {/* Email Id*/}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              Email Id
            </p>
            <input
              type="text"
              placeholder="Email Id"
              name="email"
              className=" h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
          </div>
          {/*Vehicle Number */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              Vehicle Number
            </p>
            <input
              type="text"
              placeholder="Vehicle Number"
              name="email"
              className=" h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
          </div>
          {/* Driving License */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              Driving License
            </p>
            <input
              type="text"
              placeholder="Driving License"
              name="email"
              className=" h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
          </div>
          {/* Experience */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              Experience
            </p>
            <input
              type="text"
              placeholder="Experience"
              name="email"
              className=" h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-2 outline-none"
            />
          </div>
          {/* Upload Your Image */}
          <div className="flex flex-col">
            <p className="text-[#333333] text-[16.21px] font-Montserrat">
              Upload Your Image
            </p>
            <div className="flex flex-row-reverse shadow-xl justify-between items-center pr-4 h-[45.68px]">
              <Upload
                onClick={handleUploadIconClick}
                className="cursor-pointer"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden h-[45.68px] pt-2 text-[#A19797] text-[14.19px] font-Montserrat px-2 outline-none"
              />
            </div>
            {selectedImage && (
              <div className="pt-4 flex flex-row gap-4">
                <p>Selected Image Preview:</p>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="w-[30%]"
                />
              </div>
            )}
          </div>
        </div>

        {/* submit */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="text-[#FFFFFF] font-bold text-[18px] shadow-xl font-Inter bg-[#58B310] rounded-lg pl-6 pr-6 pt-1 pb-1 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
