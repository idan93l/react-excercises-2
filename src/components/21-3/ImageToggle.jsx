import React, { useRef } from "react";
import troll from "./9gag-troll.png";
import crazyTroll from "./9gag-crazy-troll.png";

export default function ImageToggle() {
  const image = useRef();

  const changeImage = () => {
    image.current.src = crazyTroll;
  };

  const resetImage = () => {
    image.current.src = troll;
  };

  return (
    <div>
      <img
        style={{ height: "60vh" }}
        alt="troll"
        ref={image}
        src={troll}
        onMouseOver={changeImage}
        onMouseOut={resetImage}
      />
    </div>
  );
}
