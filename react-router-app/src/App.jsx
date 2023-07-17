import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Department from "./components/Department";
import RoR from "./components/RoR";
import ReactDep from "./components/ReactDep";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="departments" element={<Department />}>
          <Route index element={<ReactDep />} />
          <Route path="ror" element={<RoR />} />
          <Route path="react" element={<ReactDep />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
