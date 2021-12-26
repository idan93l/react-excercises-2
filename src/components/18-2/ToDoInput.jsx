import React, { useState } from "react";

const ToDoInput = ({createToDoItem}) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    if (value === '') {
      return console.log('please add something to do')
    }

    createToDoItem(value);

    setValue("");
  }

  return (
    <div>
      <input
      type="text"
      placeholder="Create assingment"
      value={value}
      onChange={e => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>
    </div>
  );
};

export default ToDoInput;
