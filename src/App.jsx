import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./component/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Performance from "./pages/Performance";
import Health from "./pages/Health";
import Events from "./pages/Events";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="performance" element={<Performance />} />
        <Route path="health" element={<Health />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  );
}


