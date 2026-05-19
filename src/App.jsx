import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx"
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Members from "./pages/Members/Members.jsx"
import Project from "./pages/Project/Project.jsx"
import Recruit from "./pages/Recruit/Recruit.jsx"

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/members" element={<Members />} />
        <Route path="/recruit" element={<Recruit />} />
      </Route>
    </Routes>
  );
}

export default App;