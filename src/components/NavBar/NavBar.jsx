import React from "react";
import FR from "../../Assets/img/Four.png";
import { FaSnapchatGhost } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";

function NavBar() {
  return (
    <div className="w-full home">
      <div className="four px-12 py-3 font1 relative">
        <div>
          <img src={FR} alt="" />
        </div>
        <div className="w-full flex pb-2 justify-center text-white ">
          <div className=" w-full flex text-[19px] font-medium justify-between">
            <p className="">NEWS</p>
            <p className="">ENTERTAINMENT</p>
            <p className="">LIFESTYLE</p>
            <p className="">HEALTH & BEAUTY</p>
            <p className="">RELATIONSHIPS</p>
          </div>
          <div className="w-[40%] justify-center flex">
            <div className="pl-7">
              <AiFillYoutube size={25} />
            </div>
            <div className="pl-7">
              <RiFacebookFill size={25} />
            </div>
            <div className="pl-7">
              <AiOutlineInstagram size={25} />
            </div>
            <div className="pl-7">
              <FaSnapchatGhost size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-12 pb-16 pt-[19rem] font1 ">
        <div className="w-[50%]">
          <h1 className="text-[#C82462] font-semibold text-3xl tracking-widest">UNCATEGORISED</h1>
          <h1 className="text-white font2 text-[38.1709px] leading-[52px] tracking-widest">
            Roe v. Wade: What you’re saying in response to abortion rights beig
            restricted
          </h1>
        </div>
        <div className="mt-7 pl-1">
          <p className="text-[#FE95D5] font5 text-[23px] font-medium leading-[28px] tracking-widest">By Stefan Amitage</p>
          <p className="text-white text-[20px] leading-[24px] font-medium tracking-widest">JUNE 22, 2022- SHARES</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
