import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">

        <div className="container py-4 px6 mx-auto">
            <Header />

            <main>
                <Outlet />
            </main>
        </div>

    </div>
  );
};

export default AppLayout;
