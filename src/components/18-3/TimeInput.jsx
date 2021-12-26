import React, { useState } from "react";

const TimeInput = ({name, handleChange, inputValue}) => {
  const [value, setValue] = useState('')

  // const handleSubmit = e => {
  //   if (value === '') {
  //     return console.log('please add something to do')
  //   }

  //   createToDoItem(value);

  //   setValue("");
  // }

  return (
    <div>
      {name}
      <input type="text" name={name} value={inputValue} onChange={handleChange}/>
    </div>
  )
}

export default TimeInput;