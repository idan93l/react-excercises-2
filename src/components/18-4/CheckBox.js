import React, { useState } from "react";
import CheckedItem from "./CheckedItem.jsx";
import Button from "./Button.jsx";

const initial = [
  { name: "one", checked: false },
  { name: "two", checked: false },
  { name: "three", checked: false },
  { name: "four", checked: false },
  { name: "five", checked: false },
]

export default function CheckBox() {
  const [items, setItems] = useState(initial);

  const handleChange = (e) => {
    const newItems = [...items];
    const item = newItems[e.target.id];
    const newItem = { name: e.target.name, checked: !item.checked };
    newItems.splice(e.target.id, 1, newItem);
    setItems(newItems);
  }

  const filterItems = (items) => {
    return items.filter(item => {
      const checked = item.checked;
      return checked === false;
    })
  }

  const newItems = () => {
    const newArr = filterItems(items);
    setItems(newArr);
  }

  const resetItems = () => {
    setItems(initial);
  }

  return (
    <div>
      {items.map((item, index) => (
        <CheckedItem
          key={item.name}
          index={index}
          item={item}
          handleChange={handleChange}
        />
      ))}
      <Button buttonName="delete" click={newItems}/>
      <Button buttonName="reset" click={resetItems} />
    </div>
  );
}
