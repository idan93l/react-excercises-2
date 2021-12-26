import React, { useState } from "react";

const Text = ({lorem, maxLength}) => {
  const text = lorem;
  const [readMore, setReadMore] = useState(true)
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <h1>
      {readMore ? text.slice(0, maxLength) : text}
      <span 
      onClick={toggleReadMore}
      style={{cursor: 'pointer', color: 'blue'}}
      >
        {readMore ? "...read more" : " show less"}
      </span>
    </h1>
  )
}

export default Text;