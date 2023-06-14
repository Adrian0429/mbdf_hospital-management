import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePoweroff } from "react-icons/ai";
import Dashboard from "./components/dashboard";
import Reservasi from "./components/reservasi";
import Transaksi from "./components/transaksi";
import Profil from "./components/profil";
import { NavLink } from "react-router-dom";
import axios from "axios";

function User_Dashboard() {
  const [Open, setOpen] = useState("dashboard");

  const menuItem = [
    {
      path: "dashboard",
      icon: <Dashboard />,
    },
    {
      path: "reservasi",
      icon: <Reservasi />,
    },
    {
      path: "transaksi",
      icon: <Transaksi />,
    },
    {
      path: "profil",
      icon: <Profil />,
    },
  ];

  function handleClick(name: string) {
    setOpen(name);
  }
  return (
    <div className="flex">
      <div className="w-[20%] h-screen shadow-xl border border-black-100 flex flex-col">
        <h1 className="text-2xl mt-20 text-center font-bold text-green-800">
          Hospital
        </h1>
        <div className="mt-20 mx-auto space-y-10">
          <button
            className="group flex space-x-4 text-xl"
            onClick={() => handleClick("dashboard")}
          >
            <div className=" w-[20%] h-full">
              <AiFillHome
                className="text-2xl text-gray-400 group-hover:text-green-800"
                style={{
                  color:
                    Open == "dashboard"
                      ? "rgb(22 101 52 / var(--tw-text-opacity))"
                      : "rgb(156 163 175 / var(--tw-text-opacity))",
                }}
              ></AiFillHome>
            </div>
            <div className=" w-[88%] h-full">
              <Link
                className="font-medium text-md text-gray-400 group-hover:text-black"
                href={""}
                style={{
                  color:
                    Open == "dashboard"
                      ? "#000000"
                      : "rgb(156 163 175 / var(--tw-text-opacity))",
                }}
              >
                Dashboard
              </Link>
            </div>
          </button>
          <button
            className="group flex space-x-4 text-xl"
            onClick={() => handleClick("reservasi")}
          >
            <div className=" w-[20%] h-full">
              <AiOutlineBook
                className="text-2xl text-gray-400 group-hover:text-green-800"
                style={{
                  color:
                    Open == "reservasi"
                      ? "rgb(22 101 52 / var(--tw-text-opacity))"
                      : "rgb(156 163 175 / var(--tw-text-opacity))",
                }}
              ></AiOutlineBook>
            </div>
            <div className=" w-[88%] h-full">
              <Link
                className="font-medium text-md  text-gray-400 group-hover:text-black"
                href={""}
                style={{
                  color:
                    Open == "reservasi"
                      ? "#000000"
                      : "rgb(156 163 175 / var(--tw-text-opacity))",
                }}
              >
                Reservasi
              </Link>
            </div>
          </button>
          <button
            className="group flex space-x-4 text-xl"
            onClick={() => handleClick("transaksi")}
          >
            <div className=" w-[20%] h-full">
              <AiOutlineShoppingCart
                className="text-2xl text-gray-400 group-hover:text-green-800"
                style={{
                  color:
                    Open == "transaksi"
                      ? "rgb(22 101 52 / var(--tw-text-opacity))"
                      : "rgb(156 163 175 / var(--tw-text-opacity))",
                }}
              ></AiOutlineShoppingCart>
            </div>
            <div className=" w-[88%] h-full">
              <Link
                className="font-medium text-md  text-gray-400 group-hover:text-black"
                href={""}
                style={{
                  color:
                    Open == "transaksi"
                      ? "#000000"
                      : "rgb(156 163 175 / var(--tw-text-opacity))",
                }}
              >
                Transaksi
              </Link>
            </div>
          </button>
          <button
            className="group flex space-x-4 text-xl"
            onClick={() => handleClick("profil")}
          >
            <div className=" w-[20%] h-full">
              <AiOutlineUser
                className="text-2xl text-gray-400 group-hover:text-green-800"
                style={{
                  color:
                    Open == "profil"
                      ? "rgb(22 101 52 / var(--tw-text-opacity))"
                      : "rgb(156 163 175 / var(--tw-text-opacity))",
                }}
              ></AiOutlineUser>
            </div>
            <div className=" w-[88%] h-full">
              <Link
                className="font-medium text-md  text-gray-400 group-hover:text-black"
                href={""}
                style={{
                  color:
                    Open == "profil"
                      ? "#000000"
                      : "rgb(156 163 175 / var(--tw-text-opacity))",
                }}
              >
                Profil
              </Link>
            </div>
          </button>
          <div className="group flex space-x-4 text-xl">
            <div className=" w-[20%] h-full">
              <AiOutlinePoweroff className="text-2xl text-red-600 opacity-40 group-hover:opacity-100"></AiOutlinePoweroff>
            </div>
            <div className=" w-[88%] h-full">
              <Link
                className="font-medium text-md  text-red-600 opacity-40 group-hover:opacity-100"
                href={""}
              >
                Keluar
              </Link>
            </div>
          </div>
        </div>
      </div>
      {menuItem.map((item, index) => (
        <div
          style={{ display: Open == item.path ? "block" : "none" }}
          className="w-[100%]"
        >
          {item.icon}
        </div>
        // <NavLink to={item.path} key={index} className="link" activeclassName="active">
        //     <div className="icon">{item.icon}</div>
        //     <div style={{display: Open ? "block" : "none"}} className="link_text">{item.name}</div>
        // </NavLink>
      ))}
    </div>
  );
}

export default User_Dashboard;
