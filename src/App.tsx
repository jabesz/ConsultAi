import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageForm from "./pages/PageForm/Index";
import Register from "./pages/Register/Index";
import Home from "./pages/Home/Index";
import HomeLogin from "./pages/HomeLogin/Index";
import Events from "./pages/Events/Index";
import Post from "./pages/TagPost/Index";
import Engagement from "./pages/Engagement/Index";
import PageLibrary from "./pages/Library/Index";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PageForm />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<HomeLogin />} />
        <Route path="/agendar-postagem" element={<Post />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/library" element={<PageLibrary />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default App;