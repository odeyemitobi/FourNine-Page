import React from "react";

function LoadBtn(props) {
  return (
    <button class="bg-[#C82462] text-white  px-10 rounded-full">
      {props.children}
    </button>
  );
}

export default LoadBtn;
