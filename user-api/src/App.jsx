import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = () => toast.success("Wow so easy!");
  return (
    <>
      <button className="btn btn-primary" onClick={notify}>
        hey
      </button>
      <ToastContainer />
    </>
  );
}

export default App;
