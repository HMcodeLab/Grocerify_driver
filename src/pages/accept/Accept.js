import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Header from "../../components/header/Header";
import MapImg from "../../assests/images/map2.png";
import { ReactComponent as Loc } from "../../assests/icons/location.svg";
import { ReactComponent as Burger } from "../../assests/icons/burger.svg";
import { ReactComponent as Bank } from "../../assests/icons/bank2.svg";
import { ReactComponent as Note } from "../../assests/icons/note.svg";
import { acceptdeliveryboyorder, getDataFromToken } from "../../helper/helper";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { BASE_URL } from "../../api.js";

// decline - back myactivity
// accept - map1

const Accept = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAccept, setAccept] = useState(false);
  const [isDecline, setDecline] = useState(false);
  const [data, setdata] = useState([])
  let id = searchParams.get("id")
  const openAccept = async () => {
    setAccept(true);
    const {email} = await getDataFromToken()
    const acceptPromise = acceptdeliveryboyorder(id, email)
					toast.promise(acceptPromise, {
						loading: 'Loading...',
						success: 'Order Accepted',
						error: 'Order already accepted!',
					})

    
        navigate(`/map1?id=${id}`);
  };
  useEffect(() => {
    async function Fetchdata(){
      const data=await fetch(BASE_URL+'/api/getorderdetailsbyid/'+id)
      const response=await data.json()
      setdata(response?.order)
      console.log(response);
    }
    Fetchdata()
  }, [])
  

  const openDecline = () => {
    setDecline(true);
    navigate("/myActivity");
  };
  

  return (
    <>
    <Toaster />
    <div className="flex justify-center bg-gray-100">
      <div
        className={`flex flex-col w-[430px] h-[840px] my-[3%] overflow-y-auto scrollable-content bg-white`}
      >
        <Header />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8692862432147!2d-122.40779378591158!3d37.78371799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580d6b04c7e35%3A0x1f5f4f6d38409400!2sGolden+Gate+Bridge!5e0!3m2!1sen!2sus!4v1393483356000" width="600" height="450" ></iframe>

        <div className="bg-[#FFFFFF] flex flex-col px-8 py-8 rounded-t-3xl shadow-lg gap-6">
          <div className="flex justify-center">
            <p className="text-[#303030] text-[16.39px] font-Inter text-center font-bold">
              {data?.shop?.shopName}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#303030] text-[14px] font-Montserrat font-semibold ">
            Order Id : #{data?.order_id}
            </p>
            <div className="flex flex-row items-center gap-3">
              <Loc className="w-[20px] h-[20px]" />
              <p className="text-[#303030] text-[14px] font-Montserrat leading-5 w-[70%]">
                {data?.shop?.ShopAddress}{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <Burger className="w-[20px] h-[20px]" />
                <p className="text-[#303030] text-[14px] font-semibold font-Montserrat">
                  Customer order{" "}
                </p>
              </div>
              <div className="flex flex-col gap-1 px-10">

                {
                  data?.products?.map((item)=>{
                    return(<>
                    <div className="flex flex-row justify-between">
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    {item?.productid?.products_title}
                  </p>
                  <p className="text-[#000000] text-[12px] font-Montserrat">
                    {item?.quantity}
                  </p>
                  {/* <p className="text-[#000000] text-[12px] font-Montserrat">
                    200Rs
                  </p> */}
                </div>
                    </>)
                  })
                }
                

                <hr className="border-solid border-[#000000] border-[1px] my-2" />
                <div className="flex flex-row justify-between">
                  <p className="text-[#000000] text-[14px] font-Montserrat font-bold">
                    Total
                  </p>
                  <p className="text-[#000000] text-[14px] font-Montserrat font-bold">
                  ₹{data?.order_price}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Bank className="w-[30px] h-[30px]" />
              <p className="text-[#000000] text-[14px] font-Montserrta">
                Payment method - <span className="text-[#06B178]"> {data?.shop?.paymentType} </span>
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
  </>
  );
};

export default Accept;
