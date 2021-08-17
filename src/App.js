import React from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Protected from "./Protected"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/homepage">
          <Protected Cmp={Home} />
        </Route>
        <Route path="/profile">
          <Protected Cmp={Profile} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </BrowserRouter>
    </div>
  );
}
