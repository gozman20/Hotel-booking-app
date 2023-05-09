import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SharedLayout from "./SharedLayout";
import Allrooms from "./components/Allrooms";

import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/room/:id",
//     element: <RoomDetails />,
//   },
// ]);

function App() {
  return (
    <div className="bg-gray-200 overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Allrooms />} />
            <Route path="room" element={<Home />} />
          </Route>
          <Route path="room/:id" element={<RoomDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
