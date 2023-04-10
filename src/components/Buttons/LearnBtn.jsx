import React from "react";

function LearnBtn(props) {
  return (
    <button class="bg-transparent font3 hover:bg-[#C82462] text-[#C82462] hover:text-white px-8 border border-[#C82462] hover:border-transparent rounded-full">
      {props.children}
    </button>
  );
}

export default LearnBtn;
