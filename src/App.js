import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import UpdatedNav from "./components/updatedNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import firebase from "firebase/app";

import Profile from "./routes/profile";
import Home from "./routes/home";
import Login from "./routes/login";
import Store from "./routes/store";
import Notifications from "./routes/notifications";
import ErrorPage from "./routes/errorMsg";
import Settings from "./routes/settings";
import Inventory from "./routes/inventory";
import Open from "./routes/open";
import Explore from "./routes/explore";
import PokeDex from "./routes/pokedex";
import SignUp from "./routes/signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/notifications" element={<Notifications />} />

          <Route path="/open" element={<Open />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/pokedex" element={<PokeDex />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
