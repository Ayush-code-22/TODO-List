import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Import trash icon

function Todolist(props) {
  return (
    <div className="list-item">
      <li>{props.item}</li>
      <button onClick={() => props.deleteItem(props.index)} className="delete-btn">
        <FaTrash />
      </button>
    </div>
  );
}

export default Todolist;
