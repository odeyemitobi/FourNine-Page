import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { SlSocialYoutube } from "react-icons/sl";
import ReadBtn from "../../components/Buttons/ReadBtn";
import TR1 from "../../Assets/img/trendimg1.png";
import TR2 from "../../Assets/img/trendimg2.png";
import TR3 from "../../Assets/img/trendimg3.png";
import TR4 from "../../Assets/img/trendimg4.png";
import DS1 from "../../Assets/img/discover1.png";
import DS2 from "../../Assets/img/discover2.png";
import DS3 from "../../Assets/img/discover3.png";
import DS4 from "../../Assets/img/discover4.png";
import DS5 from "../../Assets/img/discover5.png";
import LIP from "../../Assets/img/lipstick.png";
import LIPL from "../../Assets/pic/liplogo.png";
import DB1 from "../../Assets/pic/disbody1.png";
import DB2 from "../../Assets/pic/disbody2.png";
import DB4 from "../../Assets/pic/disbody4.png";
import DBL2 from "../../Assets/pic/disbodylogo2.png";
import DBL4 from "../../Assets/pic/disbodylogo4.png";
import JoinBtn from "../../components/Buttons/JoinBtn";
import LoadBtn from "../../components/Buttons/LoadBtn";
import LearnBtn from "../../components/Buttons/LearnBtn";
import LearnBtn2 from "../../components/Buttons/LearnBtn2";

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
        <div className="px-12 pt-8 pb-16">
          <h1 className="text-[#C82462] text-[45px] leading-[55px] tracking-widest font1">
            TRENDING NOW
          </h1>
          <div className="flex justify-between cursor-pointer mt-9">
            <div className=" w-[23%] shadow-sm bg-[#FFF9FF]">
              <div className="relative">
                <img className="absolute" src={TR1} alt="" />
                <div className="relative pl-6 pt-3">
                  <h1 className="text-white text-center font-bold text-[30px] w-[50px] rounded-full bg-[#C82462]">
                    1
                  </h1>
                </div>
              </div>
              <div className="px-3 relative mt-[119px]">
                <h1 className="font1 text-[#C82462] text-[22px] leading-7 tracking-widest mt-5">
                  UNCATEGORISED
                </h1>
                <p className="font2 text-[#C82462] text-[35px] leading-8 tracking-widest mt-5">
                  Roe v Wade What you’re saying in...
                </p>
                <p className="w-[97%] font8 text-[13px] leading-5 tracking-widest mt-5">
                  On Friday, the United States Supreme Court Voted <br /> to
                  overturn the landmark <br /> Roe v wade decision...
                </p>
                <p className="font8 text-[13px] leading-5 tracking-widest mt-5">
                  JUNE 27, 2022
                </p>
                <div className="my-4 text-[10px]">
                  <ReadBtn>
                    <ul>Read More</ul>
                  </ReadBtn>
                </div>
              </div>
            </div>
            <div className=" w-[23%] shadow-sm bg-[#FFF9FF]">
              <div className="relative">
                <img className="absolute" src={TR2} alt="" />
                <div className="relative pl-6 pt-3">
                  <h1 className="text-white text-center font-bold text-[30px] w-[50px] rounded-full bg-[#C82462]">
                    2
                  </h1>
                </div>
              </div>
              <div className="px-3 relative mt-[119px]">
                <h1 className="font1 text-[#C82462] text-[22px] leading-7 tracking-widest mt-5">
                  UNCATEGORISED
                </h1>
                <p className="font2 text-[#C82462] text-[35px] leading-8 tracking-widest mt-5">
                  What to expect when driving on..
                </p>
                <p className="font8 text-[13px] leading-5 tracking-widest mt-5">
                  This is a sponsored article in partnership with National
                  Highways… Did you know that
                </p>
                <p className="font8 text-[13px] leading-5 tracking-widest mt-10">
                  JUNE 20, 2022
                </p>
                <div className="mt-4 mb-6 text-[10px]">
                  <ReadBtn>
                    <ul>Read More</ul>
                  </ReadBtn>
                </div>
              </div>
            </div>
            <div className="w-[23%] shadow-sm bg-[#FFF9FF]">
              <div className="relative">
                <img className="absolute" src={TR3} alt="" />
                <div className="relative pl-6 pt-3">
                  <h1 className="text-white text-center font-bold text-[30px] w-[50px] rounded-full bg-[#C82462]">
                    3
                  </h1>
                </div>
              </div>
              <div className="px-3 relative mt-[119px]">
                <h1 className="font1 text-[#C82462] text-[22px] leading-7 tracking-widest mt-5">
                  UNCATEGORISED
                </h1>
                <p className="font2  text-[#C82462] text-[33px] leading-8 tracking-widest mt-5">
                  Meet Rebekah Vardy’s children afte...
                </p>
                <p className="w-[91.7%] font8 text-[13px] leading-5 tracking-widest mt-5">
                  Rebekah Vardy's children are her top priority – and the doting
                  mother has made no secret that
                </p>
                <p className="font8 text-[13px] leading-5 tracking-widest mt-5">
                  DECEMBER 8, 2021
                </p>
                <div className="my-4 text-[10px]">
                  <ReadBtn>
                    <ul>Read More</ul>
                  </ReadBtn>
                </div>
              </div>
            </div>
            <div className=" w-[23%] shadow-sm bg-[#FFF9FF]">
              <div className="relative">
                <img className="absolute" src={TR4} alt="" />
                <div className="relative pl-6 pt-3">
                  <h1 className="text-white text-center font-bold text-[30px] w-[50px] rounded-full bg-[#C82462]">
                    4
                  </h1>
                </div>
              </div>
              <div className="px-3 relative mt-[119px]">
                <h1 className="font1 text-[#C82462] text-[22px] leading-7 tracking-widest mt-5">
                  UNCATEGORISED
                </h1>
                <p className="font2 text-[#C82462] text-[35px] leading-8 tracking-widest mt-5">
                  7 tips for creating a flawless...
                </p>
                <p className="font8 text-[13px] leading-5 tracking-widest mt-5">
                  Even when using your favourite dating app, finding your
                  perfect match is no easy feat. While Tinde
                </p>
                <p className="font8 text-[13px] leading-5 tracking-widest mt-5">
                  DECEMBER 8, 2021
                </p>
                <div className="my-4 text-[10px]">
                  <ReadBtn>
                    <ul>Read More</ul>
                  </ReadBtn>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-[40px] mt-16">
            <LoadBtn>LOAD MORE</LoadBtn>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-full">
          <img className="absolute h-[376px] w-[50%]" src={LIP} alt="" />
          <div className="relative mt-14">
            <img className="ml-auto px-5 h-[50px]" src={LIPL} alt="" />
            <h1 className="text-red-700 px-4 text-[57px] cursor-default leading-9 text-end tracking-widest">
              NINE
            </h1>
            <h1 className="text-red-700 text-[47px] cursor-default font-semibold px-5 text-end">
              LOOKS
            </h1>
          </div>
        </div>
        <div className="w-full bg-[#FFF9FF]">
          <div className="px-6 pt-14 pb-3">
            <h1 className="font1 text-[#C82462] text-[23px] leading-7 tracking-widest">
              OUR BEAUTY BRAND
            </h1>
            <p className="font10 mt-12 text-[36px] leading-9 tracking-widest">
              Four Nine Looks makes beauty accessible to everyone with tips,
              tricks and tutorials to make you feel your best!
            </p>
            <div className="text-[35px] mt-8">
              <LearnBtn>LEARN MORE</LearnBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#C82462]">
        <div className="px-14 pt-7 pb-9 flex justify-between">
          <div className="w-full text-white text-[36px] font3">
            <h1 className="font-semibold tracking-[-0.03em]">ABOUT US</h1>
            <p className="text-[32px] mt-24 font-medium">
              The Four Nine team is run by talented people who are guided and
              inspired by our global female-first community of 14 million people
              every day.
            </p>
            <div className=" mt-12">
              <LearnBtn2>LEARN MORE</LearnBtn2>
            </div>
          </div>
          <div className="w-full">p</div>
        </div>
      </div>
      <div>hello</div>
    </MainLayout>
  );
}

export default Home;
