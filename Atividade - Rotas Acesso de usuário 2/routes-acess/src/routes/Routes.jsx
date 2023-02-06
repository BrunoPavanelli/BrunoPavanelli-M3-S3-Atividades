import { Route, Routes } from "react-router-dom";
import Customer from "../pages/Customer/Customer";
import Home from "../pages/Home/Home";
import { members } from "../mock";
import Company from "../pages/Company/Company";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/customer/:id" element={<Customer members={members}/>} />
      <Route path="/company/:id" element={<Company members={members}/>} />
      <Route path="/" element={<Home members={members}/>} />
    </Routes>
  );
};

export default AppRoutes;
