const ToDoItem = ({ item, index, deleteToDoItem, completeToDoItem, updateToDoItem }) => {
  return (
    <div>
      <br />
      <br />
      <li style={{textDecoration: item.completed ? "line-through" : ""}}>{item.name}</li>
      <button onClick={() => deleteToDoItem(index)}>delete</button>
      <button onClick={() => updateToDoItem(index)}>update</button>
      <button onClick={() => completeToDoItem(index)}>{item.completed ? 'x' : 'v'}</button>
    </div>
  );
};

export default ToDoItem;