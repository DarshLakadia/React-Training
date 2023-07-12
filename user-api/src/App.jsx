import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useReducer, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./components/Users";
import axios from "axios";
import ModalDialog from "./components/ModalDialog";
export const UserContext = React.createContext();

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "LIST_USER":
      return payload;
    case "CREATE_USER":
      console.log("create user", state.length);

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
    case "GET_USER":
      console.log("get user");
    case "UPDATE_USER":
      console.log("update user", payload);
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
      console.log("delete user");
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
      <button className="btn btn-primary" onClick={notify}>
        Create User
      </button>
      <UserContext.Provider value={{ users: users, dispatch: dispatch }}>
        <ModalDialog />
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
