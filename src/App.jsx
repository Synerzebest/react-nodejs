import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Login from './pages/Login';
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="community" element={<Search />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>        
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);