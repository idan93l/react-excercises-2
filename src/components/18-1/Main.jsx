import React from "react";
import Text from "./Text.jsx";

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, repellendus sunt repudiandae at est totam amet nam aut rerum illo quis laudantium recusandae eum. At dolore cumque nihil natus reiciendis."

const maxLength = 100;

const Main = () => {
  return (
    <div>
      <Text lorem={lorem} maxLength={maxLength}/>
    </div>
  )
}

export default Main;