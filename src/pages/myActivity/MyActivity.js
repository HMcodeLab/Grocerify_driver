import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "../myActivity/myActivity.css";
import { ReactComponent as Loc } from "../../assests/icons/location.svg";
import { ReactComponent as Shop } from "../../assests/icons/shop.svg";
import { ReactComponent as Time } from "../../assests/icons/time.svg";


// accept delivery - accept

const MyActivity = () => {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("To Deliver");

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleLocClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Use reverse geocoding to get city name
          const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
          const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

          try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
              const addressComponents = data.results[0].address_components;
              const cityComponent = addressComponents.find((component) =>
                component.types.includes("locality")
              );

              if (cityComponent) {
                setCity(cityComponent.long_name);
              } else {
                console.error("City not found in address components");
              }
            } else {
              console.error("No results found from reverse geocoding");
            }
          } catch (error) {
            console.error("Error fetching city:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          // Handle errors, e.g., show an error message to the user
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
      // Handle the case where geolocation is not supported
    }
  };

  const renderCards = () => {
    switch (selectedStatus) {
      case "To Deliver":
        return (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#333333] text-[18px] font-Montserrat font-black">
                  # ORDER5673
                </p>
                <Link to={"/accept"}>
                <button className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] text-end px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
                  Accept Delivery <br /> ₹400
                </button>
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Shop className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Shop Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      150th Street, Near Cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Loc className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Delivery Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      146tyh Street, near cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 justify-center mt-4">
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Pick up time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Delivery time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#333333] text-[18px] font-Montserrat font-black">
                  # ORDER5673
                </p>
                <Link to={"/accept"}>
                <button className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] text-end px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
                  Accept Delivery <br /> ₹400
                </button></Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Shop className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Shop Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      150th Street, Near Cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Loc className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Delivery Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      146tyh Street, near cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 justify-center mt-4">
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Pick up time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Delivery time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#333333] text-[18px] font-Montserrat font-black">
                  # ORDER5673
                </p>
                <Link to={"/accept"}>
                <button className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] text-end px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
                  Accept Delivery <br /> ₹400
                </button></Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Shop className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Shop Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      150th Street, Near Cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Loc className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Delivery Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      146tyh Street, near cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 justify-center mt-4">
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Pick up time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Delivery time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#333333] text-[18px] font-Montserrat font-black">
                  # ORDER5673
                </p>
                <Link to={"/accept"}>
                <button className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] text-end px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
                  Accept Delivery <br /> ₹400
                </button></Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Shop className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Shop Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      150th Street, Near Cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Loc className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Delivery Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      146tyh Street, near cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 justify-center mt-4">
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Pick up time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Delivery time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Processing":
        return (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#333333] text-[18px] font-Montserrat font-black">
                  # ORDER1002
                </p>
                <Link to={"/accept"}>
                <button className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] text-end px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
                  Accept Delivery <br /> ₹400
                </button></Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Shop className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Shop Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      150th Street, Near Cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Loc className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Delivery Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      146tyh Street, near cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 justify-center mt-4">
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Pick up time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Delivery time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#333333] text-[18px] font-Montserrat font-black">
                  # ORDER1002
                </p>
                <Link to={"/accept"}>
                <button className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] text-end px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
                  Accept Delivery <br /> ₹400
                </button></Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Shop className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Shop Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      150th Street, Near Cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Loc className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Delivery Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      146tyh Street, near cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 justify-center mt-4">
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Pick up time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Delivery time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#333333] text-[18px] font-Montserrat font-black">
                  # ORDER1002
                </p>
                <Link to={"/accept"}>
                <button className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] text-end px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
                  Accept Delivery <br /> ₹400
                </button></Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Shop className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Shop Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      150th Street, Near Cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Loc className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Delivery Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      146tyh Street, near cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 justify-center mt-4">
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Pick up time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Delivery time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Delivered":
        return (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#333333] text-[18px] font-Montserrat font-black">
                  # ORDER8002
                </p>
                <Link to={"/accept"}>
                <button className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] text-end px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
                  Accept Delivery <br /> ₹400
                </button></Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Shop className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Shop Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      150th Street, Near Cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Loc className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Delivery Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      146tyh Street, near cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 justify-center mt-4">
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Pick up time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Delivery time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#333333] text-[18px] font-Montserrat font-black">
                  # ORDER8002
                </p>
                <Link to={"/accept"}>
                <button className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] text-end px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
                  Accept Delivery <br /> ₹400
                </button></Link>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <Shop className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Shop Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      150th Street, Near Cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Loc className="w-[30px] h-[30px]" />
                  <div className="flex flex-col">
                    <p className="text-[#333333] text-[14px] font-Montserrat font-bold">
                      Delivery Address
                    </p>
                    <p className="text-[#333333] text-[10px] font-Montserrat">
                      146tyh Street, near cascade Restaurant
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 justify-center mt-4">
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Pick up time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Time className="w-[25px] h-[25px]" />
                    <p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
                      Delivery time
                    </p>
                    <p className="text-[#979797] text-[12px] font-Montserrat">
                      10:00 a.m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-col gap-8 w-[430px] h-[840px] my-[3%] overflow-y-auto scrollable-content bg-white">
        <Header />
        <div className="flex flex-row justify-between px-5 items-center">
          <p className="text-[#333333] text-[20px] font-Gorditas font-semibold flex text-center">
            My Activity
          </p>
          <div className="flex flex-row items-center gap-1">
            <Loc
              onClick={handleLocClick}
              style={{ cursor: "pointer" }}
              className="w-[25px] h-[25px]"
            />
            {location && (
              <div>
                <p>Latitude: {location.latitude}</p>
                {/* <p>Longitude: {location.longitude}</p> */}
                {city && <p>City: {city}</p>}
              </div>
            )}
          </div>
        </div>

        {/* nav */}
        <div className="flex flex-row justify-between px-5">
          <p
            className={`cursor-pointer ${
              selectedStatus === "To Deliver"
                ? "text-[#58B310] underline"
                : "text-[#909090]"
            } text-[16px] font-Montserrat`}
            onClick={() => handleStatusClick("To Deliver")}
          >
            To Deliver
          </p>
          <p
            className={`cursor-pointer ${
              selectedStatus === "Processing"
                ? "text-[#58B310] underline"
                : "text-[#909090]"
            } text-[16px] font-Montserrat`}
            onClick={() => handleStatusClick("Processing")}
          >
            Processing
          </p>
          <p
            className={`cursor-pointer ${
              selectedStatus === "Delivered"
                ? "text-[#58B310] underline"
                : "text-[#909090]"
            } text-[16px] font-Montserrat`}
            onClick={() => handleStatusClick("Delivered")}
          >
            Delivered
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-6 px-6">
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default MyActivity;
