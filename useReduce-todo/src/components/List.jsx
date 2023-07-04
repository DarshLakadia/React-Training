// import React from "react";
import { useContext } from "react";
import { ListContext } from "../App";
import ListItem from "./ListItem";

const List = () => {
  const { items, dispatch } = useContext(ListContext);

  return (
    <>
      {items?.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default List;
