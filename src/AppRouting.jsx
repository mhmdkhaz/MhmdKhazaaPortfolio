import { Route, Routes } from "react-router-dom";
import Login from "./pages/Home";
// import { DashboardRouting } from "./routes/route";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRouting;
