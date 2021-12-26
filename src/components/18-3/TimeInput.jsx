const TimeInput = ({ name, handleChange, inputValue }) => {
  return (
    <div>
      {name}
      <input
        type="text"
        name={name}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default TimeInput;
