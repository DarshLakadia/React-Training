import React, { useReducer } from "react";
import "./App.css";
import List from "./components/List";
import ListForm from "./components/ListForm";
import { v4 as uuidv4 } from "uuid";

export const ListContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "add_item":
      return [
        ...state,
        {
          id: uuidv4(),
          message: action.data,
          isChecked: false,
          isUpdatable: false,
        },
      ];
    case "remove_item":
      return state.filter((item) => item.id !== action.itemId);
    case "edit_item":
      console.log("edit_item: ", action.data);
      return state.map((todo) =>
        todo.id === action.itemId
          ? { ...todo, message: action.data, isUpdatable: false }
          : todo
      );
    case "check_item":
      return state.map((todo) =>
        todo.id === action.itemId
          ? { ...todo, isChecked: action.isChecked }
          : todo
      );
    case "toggle_update":
      return state.map((todo) =>
        todo.id === action.itemId ? { ...todo, isUpdatable: true } : todo
      );
  }
};

function App() {
  const [items, dispatch] = useReducer(reducer, []);
  return (
    <>
      <ListContext.Provider value={{ items: items, dispatch: dispatch }}>
        <ListForm />
        <List />
      </ListContext.Provider>
    </>
  );
}

export default App;
