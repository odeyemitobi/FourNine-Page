import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import ReadBtn from "../../components/Buttons/ReadBtn";

function Home() {
  return (
    <MainLayout>
      <div className="section2">
        <div className="w-full px-12 py-20 flex">
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
            <p className="w-full text-[19px] leading-7 font-semibold mt-5 mb-9 font3">
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
    </MainLayout>
  );
}

export default Home;
