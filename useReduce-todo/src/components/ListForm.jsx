import React, { useContext, useState } from "react";
import { ListContext } from "../App";
const ListForm = () => {
  const [text, setText] = useState("");
  const listContext = useContext(ListContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    listContext.dispatch({ type: "add_item", data: text });
    setText("");
  };
  return (
    <>
      <h2>Create TODO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ListForm;
