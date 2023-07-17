import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useReducer, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./components/Users";
import axios from "axios";
export const UserContext = React.createContext();

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "LIST_USER":
      return payload;
    case "CREATE_USER":
      return [
        ...state,
        {
          id: payload.userId,
          first_name: payload.firstName,
          last_name: payload.lastName,
          email: payload.email,
          avatar: `https://reqres.in/img/faces/${
            (state.length + 1) % 12
          }-image.jpg`,
        },
      ];
    case "UPDATE_USER":
      return state.map((user) =>
        user.id === payload.userId
          ? {
              ...user,
              first_name: payload.firstName,
              last_name: payload.lastName,
              email: payload.email,
            }
          : user
      );
    case "DELETE_USER":
      return state.filter((user) => user.id !== payload.userId);
  }
};
function App() {
  const [users, dispatch] = useReducer(reducer, []);
  const notify = () => toast.info("Wow so easy!");

  useEffect(() => {
    axios.get("https://reqres.in/api/users/").then((response) => {
      dispatch({ type: "LIST_USER", payload: response.data.data });
    });
  }, []);

  return (
    <>
      <UserContext.Provider value={{ users: users, dispatch: dispatch }}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          transition={Slide}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />{" "}
        <Users />
      </UserContext.Provider>
    </>
  );
}

export default App;
