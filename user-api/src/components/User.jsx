import { useContext } from "react";
import { UserContext } from "../App";
import Button from "react-bootstrap/Button";
import ModalDialog from "./ModalDialog";

const User = () => {
  const { users, dispatch } = useContext(UserContext);
  return (
    <>
      {users.map((user, i) => (
        <tr key={user.id} className="text-center">
          <td>{i + 1}</td>
          <td>{user.email}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>
            <img
              src={user.avatar}
              alt="Profile Photo"
              width="70"
              height="70"
              style={{
                borderRadius: "50%",
              }}
            />
          </td>
          <td>
            <ModalDialog userId={user.id} />
            <Button
              variant="outline-danger"
              size="sm"
              className="ms-2"
              onClick={() => {
                dispatch({ type: "DELETE_USER", payload: { userId: user.id } });
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default User;
