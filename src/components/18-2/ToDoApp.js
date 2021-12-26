import React, { useState } from "react";
import ToDoInput from "./ToDoInput.jsx";
import ToDoItem from "./ToDoItem.jsx";

export default function ToDoApp() {
  const [toDoItems, setToDoItems] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const createToDoItem = (toDo) => {
    const newToDoItems = [...toDoItems, { name: toDo, completed: false }];
    setToDoItems(newToDoItems);
  };

  const deleteToDoItem = (index) => {
    const newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    setToDoItems(newToDoItems);
  };

  const completeToDoItem = (index) => {
    const newToDoItems = [...toDoItems];
    newToDoItems[index].completed === false
    ? newToDoItems[index].completed = true
    : newToDoItems[index].completed = false;
    setToDoItems(newToDoItems)
  };

  const updateToDoItem = (index) => {
    const newToDoItems = [...toDoItems];
    const item = newToDoItems[index];
    let newItem = prompt(`Update ${item.name}?`, item.name);
    let toDoObj = { name: newItem, completed: false };
    newToDoItems.splice(index, 1, toDoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.name = newItem
    }
    setToDoItems(newToDoItems);
  };

  return (
    <div>
      <ToDoInput createToDoItem={createToDoItem} />
      {toDoItems.map((item, index) => {
        return (
          <ToDoItem
            index={index}
            item={item}
            deleteToDoItem={deleteToDoItem}
            completeToDoItem={completeToDoItem}
            updateToDoItem={updateToDoItem}
          />
        );
      })}
    </div>
  );
}
