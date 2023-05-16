import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserLIst from "./pages/userList/UserLIst";
import User from "./pages/user/User";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/ReactDashboard" element={<Home/>} />
          <Route excat path="/ReactDashboard/users" element={<UserLIst />} />
          <Route excat path="/ReactDashboard/user/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;