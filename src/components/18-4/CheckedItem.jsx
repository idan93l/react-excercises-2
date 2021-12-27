const CheckedItem = ({ item, handleChange, index }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={index}
        name={item.name}
        checked={item.checked}
        onChange={handleChange}
      />
      <label htmlFor={item.name}> {item.name}</label>
    </div>
  );
};

export default CheckedItem;
