import React from "react";

function LearnBtn2(props) {
  return (
    <button class="bg-transparent hover:bg-white text-white hover:text-[#C82462] px-8 border border-white hover:border-transparent font3 rounded-full">
      {props.children}
    </button>
  );
}

export default LearnBtn2;
