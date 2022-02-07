import React, { Fragment } from "react";
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

import Kanto from "./routes/regions/kanto";
import Johto from "./routes/regions/johto";
import Hoenn from "./routes/regions/hoenn";
import Sinnoh from "./routes/regions/sinnoh";

import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Fragment>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/pokedex" element={<PokeDex />} />

            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="/settings" element={<PrivateRoute />}>
              <Route path="/settings" element={<Settings />} />
            </Route>

            <Route path="/inventory" element={<PrivateRoute />}>
              <Route path="/inventory" element={<Inventory />} />
            </Route>

            <Route path="/notifications" element={<PrivateRoute />}>
              <Route path="/notifications" element={<Notifications />} />
            </Route>

            <Route path="/open" element={<PrivateRoute />}>
              <Route path="/open" element={<Open />} />
            </Route>

            <Route path="/explore" element={<PrivateRoute />}>
              <Route path="/explore" element={<Explore />} />
            </Route>

            <Route path="/regions/kanto" element={<PrivateRoute />}>
              <Route path="/regions/kanto" element={<Kanto />} />
            </Route>
            <Route path="/regions/johto" element={<PrivateRoute />}>
              <Route path="/regions/johto" element={<Johto />} />
            </Route>
            <Route path="/regions/hoenn" element={<PrivateRoute />}>
              <Route path="/regions/hoenn" element={<Hoenn />} />
            </Route>
            <Route path="/regions/sinnoh" element={<PrivateRoute />}>
              <Route path="/regions/sinnoh" element={<Sinnoh />} />
            </Route>

            <Route path="/store" element={<PrivateRoute />}>
              <Route path="/store" element={<Store />} />
            </Route>
          </Routes>
        </Fragment>
      </AuthProvider>
    </Router>
  );
}

export default App;
