import React from "react";

function JoinBtn(props) {
  return (
    <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-[#C82462] py-2 px-4 border border-white hover:border-transparent rounded">
      {props.children}
    </button>
  );
}

export default JoinBtn;
