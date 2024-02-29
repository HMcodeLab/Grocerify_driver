import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Fb } from "../../assests/icons/fb.svg"
import { ReactComponent as Google } from "../../assests/icons/Google.svg"


const Login = () => {
  const [switchBtn, setSwitchBtn] = useState(1);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/myActivity");
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-8 w-[430px] h-[840px] my-[3%] items-center py-[3%] overflow-y-auto">
        <p className="text-[#333333] text-[23.68px] font-Gorditas font-semibold pb-2">
          Hi, Welcome Back!
        </p>
        <div className="flex flex-row gap-4">
        <button
            onClick={() => setSwitchBtn(1)}
            className={`text-[#000000] text-[18.24px] font-Montserrat rounded-xl h-[37.5px] px-10 ${
              switchBtn === 1 ? "bg-[#58B310] text-white shadow-lg" : "bg-white"
            }`} >
            E-mail
          </button>
          <button
            onClick={() => setSwitchBtn(2)}
            className={`text-[#000000] text-[18.24px] font-Montserrat rounded-xl h-[37.5px] px-2 ${
              switchBtn === 2 ? "bg-[#58B310] text-white shadow-lg" : "bg-white"
            }`}
          >
            Mobile Number
          </button>
        </div>

        {/* fields */}
        <div className="flex flex-col gap-4">
          {switchBtn === 1 ? (
            <div className="flex flex-col gap-2">
              {/* Email input */}
              <div>
                <p className="text-[#333333] text-[16.21px] font-Montserrat">Enter your email address</p>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  className="w-[347.3px] h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-4 outline-none"
                  // value={user.email}
                  // onChange={(e) =>
                  // 	setUser({
                  // 		...user,
                  // 		email: e.target.value,
                  // 	})
                  // }
                />
              </div>
              {/* Password input */}
              <div className="pt-4">
                <p className="text-[#333333] text-[16.21px] font-Montserrat">Enter your password</p>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  className="w-[347.3px] h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-4 outline-none"
                  // value={user.password}
                  // onChange={(e) =>
                  // 	setUser({
                  // 		...user,
                  // 		password: e.target.value,
                  // 	})
                  // }
                />
              </div>
              {/* Forgot password link */}
              <div className="flex flex-row justify-end">
                <p
                  to={"/forgetpassword"}
                  className="text-[12px] text-[#333333] font-Montserrat cursor-pointer"
                  // onClick={handleForgotPassword}
                >
                  Forgot password?
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Phone input */}
              <div>
                <p className="pb-2 text-[#333333] text-[16.21px] font-Montserrat">Enter your phone number</p>
                <input
                  type="text"
                  placeholder="Enter Your Number"
                  name="mobile"
                  className="w-[347.3px] h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-4"
                  // value={user.mobile}
                  // onChange={(e) =>
                  // 	setUser({
                  // 		...user,
                  // 		mobile: e.target.value,
                  // 	})
                  // }
                />
              </div>
            </div>
          )}
          {switchBtn == 1 && (
            <div className="flex justify-center pt-4">
              <button
                onClick={handleLogin}
                className="text-[#FFFFFF] font-bold text-[18px] shadow-xl font-Inter bg-[#58B310] rounded-lg pl-6 pr-6 pt-1 pb-1 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Sign In
              </button>
            </div>
          )}

          {switchBtn == 2 && (
            <div className="flex justify-center pt-4">
              <button
                // onClick={handleSendOTP}
                className="text-[#FFFFFF] font-bold text-[18px] shadow-xl font-Inter bg-[#58B310] rounded-lg pl-6 pr-6 pt-1 pb-1 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Send OTP
              </button>
            </div>
          )}
          <div className="flex flex-col items-center text-[#333333] text-[16px] font-Montserrat"> 
            <Link to={"/register"} className="cursor-pointer">Do not have an account? Register with us</Link>
            <p>or</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 justify-center items-center">
                <Fb className="w-[25px] h-[25px]" />
                <p className="text-[#333333] text-[12px] font-Montserrat">Sign up with Facebook</p>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
                <Google className="w-[25px] h-[25px]" />
                <p className="text-[#333333] text-[12px] font-Montserrat">Sign up with Goggle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
