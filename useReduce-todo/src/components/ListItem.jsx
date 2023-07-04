import React, { useContext, useState } from "react";
import { ListContext } from "../App";
import "../components/style/ListItem.css";
const ListItem = ({ item }) => {
  const { items, dispatch } = useContext(ListContext);
  const [text, setText] = useState(item.message);
  return (
    <div key={item.id} className="list-item-container">
      <input
        type="checkbox"
        name="status"
        onChange={(e) => {
          dispatch({
            type: "check_item",
            isChecked: e.target.checked,
            itemId: item.id,
          });
        }}
      />
      {item.isUpdatable && (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      {item.isUpdatable && (
        <button
          onClick={() =>
            dispatch({ type: "edit_item", data: text, itemId: item.id })
          }
        >
          Update
        </button>
      )}
      {!item.isUpdatable && (
        <p style={{ textDecoration: item.isChecked ? "line-through" : "" }}>
          {item.message}
        </p>
      )}
      {!item.isUpdatable && (
        <button
          onClick={() => dispatch({ type: "toggle_update", itemId: item.id })}
        >
          Edit
        </button>
      )}
      <button
        onClick={() => dispatch({ type: "remove_item", itemId: item.id })}
      >
        Delete
      </button>
    </div>
  );
};

export default ListItem;
