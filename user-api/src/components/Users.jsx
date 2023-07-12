import Table from "react-bootstrap/Table";
import User from "./User";
const Users = () => {
  return (
    <>
      <h4>Users List</h4>
      <Table striped className="table align-middle">
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
