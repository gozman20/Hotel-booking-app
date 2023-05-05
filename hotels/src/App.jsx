import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
]);

function App() {
  return (
    <div className="bg-gray-200 overflow-x-hidden">
      <Header />

      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
