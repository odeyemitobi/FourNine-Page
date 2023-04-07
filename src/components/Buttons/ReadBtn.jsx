import React from "react";

function ReadBtn(props) {
  return (
    <button class="bg-transparent hover:bg-[#C82462] text-[#C82462] font-semibold hover:text-white py-2 px-4 border border-[#C82462] hover:border-transparent rounded">
      {props.children}
    </button>
  );
}

export default ReadBtn;
