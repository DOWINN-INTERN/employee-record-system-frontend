import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginForm/Login";
import SignUp from "./pages/LoginForm/SignUp";
import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Organization from "./pages/Organization/Organization";
import Employees from "./pages/Employees/Employees";
import "@fontsource/league-spartan";
import "./index.css";
import Leaves from "./pages/Leaves/Leaves";
import Benefits from "./pages/Benefits/Benefits";
import Branch from "./pages/Organization/Branch/Branch";
import Department from "./pages/Organization/Department/Department";
import Position from "./pages/Organization/Position/Position";
import PositionManage from "./pages/Organization/Position/PositionManage";
import Requirements from "./pages/Employees/Requirements/Requirements";
import ViewEmployees from "./pages/Employees/ViewEmployees/ViewEmployees";
import ManageEmployees from "./pages/Employees/ViewEmployees/ManageEmployees/ManageEmployees";
import AddEmployees from "./pages/Employees/ViewEmployees/AddEmployees";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/branches" element={<Branch />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/manage-position" element={<PositionManage />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/view-employees" element={<ViewEmployees />} />
          <Route path="/manage-employees" element={<ManageEmployees />} />
          <Route path="/add-employees" element={<AddEmployees />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/benefits" element={<Benefits />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
