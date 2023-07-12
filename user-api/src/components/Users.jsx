import Table from "react-bootstrap/Table";
import User from "./User";
import ModalDialog from "./ModalDialog";
const Users = () => {
  return (
    <>
      <div className="d-flex justify-content-between mx-5 my-3">
        <h4>Users List</h4>
        <ModalDialog />
      </div>
      <Table striped className="align-middle">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <User />
        </tbody>
      </Table>
    </>
  );
};

export default Users;
