import React, { useState, useEffect, useRef } from "react";

export default function SimpleEdit() {
  const [bool, setBool] = useState(false);
  const inputFocusRef = useRef();

  useEffect(() => {
    inputFocusRef.current.focus();
  });

  const onClickHandler = () => {
    bool ? setBool(false) : setBool(true);
  };

  const buttonState = () => {
    return bool ? "save" : "edit";
  };

  return (
    <>
      <input ref={inputFocusRef} style={{display: bool ? "inline" : "none"}}/>
      <button onClick={onClickHandler}>{buttonState()}</button>
    </>
  );
}
