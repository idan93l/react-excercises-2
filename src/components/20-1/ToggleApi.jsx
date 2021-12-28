import React, { useState } from "react";
import Fetching from "./Fetching.jsx";

export default function ToggleApi() {
  const [toggle, setToggle] = useState(false)

  const changeToggle = () => {
    toggle ? setToggle(false) : setToggle(true)
  }
  
  // const showData = () => {
  //   if (toggle) {
  //     return <Fetching />
  //   }
  // }

  return (
    <div>
      <button onClick={changeToggle}>Toggle!</button>
      {/* {showData()} */}
      {toggle && <Fetching />}
    </div>
  );
}