import logo from './logo.svg';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import Messages from "./components/Content/Messages/Messages";

function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Navbar />

              <main className="content">
                  <Routes>
                      <Route path="/profile"  element={<Profile />} />
                      <Route path="/messages" element={<Messages />} />
                  </Routes>
              </main>
          </div>
      </BrowserRouter>
  );
}

export default App;
