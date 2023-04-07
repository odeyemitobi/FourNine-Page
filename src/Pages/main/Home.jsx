import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import ReadBtn from "../../components/Buttons/ReadBtn";
import DS1 from "../../Assets/img/discover1.png";
import DS2 from "../../Assets/img/discover2.png";
import DS3 from "../../Assets/img/discover3.png";
import DS4 from "../../Assets/img/discover4.png";
import DS5 from "../../Assets/img/discover5.png";
import DB1 from "../../Assets/pic/disbody1.png";

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
        <div className="pl-12 pr-16 py-16">
          <h1 className="text-3xl font1 text-[#C82462]">
            DISCOVER MORE WITH OUR SHOWS
          </h1>
          <div className=" flex justify-between mt-16">
            <div className="">
              <img className="h-[22rem] absolute" src={DS1} alt="" />
              <div className="mt-[15rem] pl-[6px]">
                <img className="h-[76px] absolute" src={DB1} alt="" />
                <div className="absolute">
                  <h1 className="w-[90%] text-[20px] leading-7 py-2 px-8 rotate-[-6.04deg] text-white font-bold font6">49 QUESTIONS WITH...</h1>
                </div>
              </div>
            </div>
            <div className="">
              <img className="h-[22rem]" src={DS2} alt="" />
            </div>
            <div className="">
              <img className="h-[22rem]" src={DS3} alt="" />
            </div>
            <div className="">
              <img className="h-[22rem]" src={DS4} alt="" />
            </div>
            <div className="">
              <img className="h-[22rem]" src={DS5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
