import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { SlSocialYoutube } from "react-icons/sl";
import ReadBtn from "../../components/Buttons/ReadBtn";
import DS1 from "../../Assets/img/discover1.png";
import DS2 from "../../Assets/img/discover2.png";
import DS3 from "../../Assets/img/discover3.png";
import DS4 from "../../Assets/img/discover4.png";
import DS5 from "../../Assets/img/discover5.png";
import DB1 from "../../Assets/pic/disbody1.png";
import DB2 from "../../Assets/pic/disbody2.png";
import DB4 from "../../Assets/pic/disbody4.png";
import DBL2 from "../../Assets/pic/disbodylogo2.png";
import DBL4 from "../../Assets/pic/disbodylogo4.png";
import JoinBtn from "../../components/Buttons/JoinBtn";

function Home() {
  return (
    <MainLayout>
      <div className="section2">
        <div className="w-full pl-12 py-20 flex">
          <div className="w-full border-r-2 border-[#C82462]">
            <h1 className="text-[30px] text-[#C82462] font1 leading-[37px] font-medium">
              NEWS
            </h1>
            <p className="w-[95%] text-[19px] leading-7 font-semibold mt-5 mb-9 font3">
              RuPaul’s DragCon UK: Drag’s gone mainstream and we’re a better
              society for it
            </p>
            <ReadBtn>Read More</ReadBtn>
          </div>
          <div className="w-full pl-6 pr-1 border-r-2 border-[#C82462]">
            <h1 className="text-[30px] text-[#C82462] font1 leading-[37px] font-medium">
              LIFESTYLE
            </h1>
            <p className="w-full text-[19px] leading-7 font-semibold mt-5 mb-16 font3">
              Jameela Jamil Shares photo of her ‘boob strech marks’s on
              instagram to make..
            </p>
            <ReadBtn>Read More</ReadBtn>
          </div>
          <div className="w-full pl-6  border-r-2 border-[#C82462]">
            <h1 className="text-[30px] text-[#C82462] font1 leading-[37px] font-medium">
              LIFESTYLE
            </h1>
            <p className="w-[90%] text-[19px] leading-7 font-semibold mt-5 mb-16 font3">
              5 important reasons why women need to start accepting compliments
            </p>
            <ReadBtn>Read More</ReadBtn>
          </div>
          <div className="w-full pl-6 ">
            <h1 className="text-[30px] text-[#C82462] font1 leading-[37px] font-medium">
              BEAUTY
            </h1>
            <p className="w-[80%] text-[19px] leading-7 font-semibold mt-5 mb-9 font3">
              Karty Perry shows off her quarantine look in relatable instagram
              post
            </p>
            <ReadBtn>Read More</ReadBtn>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="pl-12 pr-16 pt-16 pb-[7rem]">
          <h1 className="text-3xl font1 text-[#C82462]">
            DISCOVER MORE WITH OUR SHOWS
          </h1>
          <div className=" flex justify-between mt-16">
            <div className="w-full">
              <img className="h-[22rem] absolute" src={DS1} alt="" />
              <div className=" flex relative justify-between pl-11 pr-20 pt-1">
                <p className="text-white text-[19px] leading-[26px] font7">
                  WATCH
                </p>
                <div className="mt-[2px]">
                  <SlSocialYoutube color="white" size={20} />
                </div>
              </div>
              <div className="pt-[12.3rem] pl-[6px]">
                <img className="h-[76px] absolute" src={DB1} alt="" />
                <div className="absolute">
                  <h1 className="w-[90%] text-[20px] leading-7 py-2 px-8 rotate-[-6.04deg] text-white font-bold font6">
                    49 QUESTIONS WITH...
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img className="h-[22rem] absolute" src={DS2} alt="" />
              <div className=" flex relative justify-between pl-11 pr-20 pt-1">
                <p className="text-white text-[19px] leading-[26px] font7">
                  WATCH
                </p>
                <div className="mt-[2px]">
                  <SlSocialYoutube color="white" size={20} />
                </div>
              </div>
              <div className="pt-[12.3rem]">
                <img className="absolute h-[76px]" src={DB2} alt="" />
                <div className="">
                  <img className="pl-8 h-[40px] absolute" src={DBL2} alt="" />
                  <div className="pt-4">
                    <h1 className="font-sans font-semibold pl-9 rotate-[-6.47deg] text-[37px] leading-[57px] text-[#C82462]">
                      SALON
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img className="h-[22rem] absolute" src={DS3} alt="" />
              <div className=" flex relative justify-between pl-11 pr-20 pt-1">
                <p className="text-white text-[19px] leading-[26px] font7">
                  WATCH
                </p>
                <div className="mt-[2px]">
                  <SlSocialYoutube color="white" size={20} />
                </div>
              </div>
              <div className="relative pt-[12.3rem] pl-4">
                <h1 className="font9 text-white rotate-[-6.04deg] font-bold text-[23px] leading-9 tracking-widest">
                  FOUR NINE VOICES
                </h1>
              </div>
            </div>
            <div className="w-full">
              <img className="h-[22rem] absolute" src={DS4} alt="" />
              <div className=" flex relative justify-between pl-11 pr-20 pt-1">
                <p className="text-white text-[19px] leading-[26px] font7">
                  WATCH
                </p>
                <div className="mt-[2px]">
                  <SlSocialYoutube color="white" size={20} />
                </div>
              </div>
              <div className="pt-[12.3rem]">
                <img className="absolute h-[76px]" src={DB4} alt="" />
                <div className="">
                  <img className="pl-8 h-[40px] absolute" src={DBL4} alt="" />
                  <div className="pt-4">
                    <h1 className="font-sans font-semibold pl-12 rotate-[-6.47deg] text-[37px] leading-[57px] text-[#97D1E5]">
                      TRIES
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img className="h-[22rem] absolute" src={DS5} alt="" />
              <div className=" flex relative justify-between pl-11 pr-20 pt-1">
                <p className="text-white text-[19px] leading-[26px] font7">
                  WATCH
                </p>
                <div className="mt-[2px]">
                  <SlSocialYoutube color="white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#C82462]">
        <div className="justify-center text-center px-[49.3px] pt-[3rem] pb-[2rem]">
          <h1 className="text-white text-3xl font1">WE’RE FOUR NINE</h1>
          <p className=" text-white mt-10 text-[26px] leading-[37px] font-medium tracking-widest font3">
            Four Nine is on a mission to drive change for the 49% in the room,
            by championing the stories that need to be told and voices that need
            to be heard
          </p>
          <div className="text-[26px] leading-8 mt-10 font1 tracking-widest">
            <JoinBtn>Join our community</JoinBtn>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="px-12 pt-8 pb-9">
          <h1 className="text-[#C82462] text-[45px] leading-[55px] tracking-widest font1">
            TRENDING NOW
          </h1>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
