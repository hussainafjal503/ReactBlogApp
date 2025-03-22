import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [slidder, setSlidder] = useState(-240);
  // console.log(user);

  const menu = [
    {
      title: "All-Blog",
      href: "/",
    },

    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Profile",
      href: "/profile",
    },
  ];

  if (!user) {
    menu.splice(2, 2);
  }
  useEffect(() => {}, [user]);
  return (
    <div className=" z-40 w-full fixed top-0 left-0 shadow-lg bg-gray-100">
      <nav className="w-full px-4  mx-auto flex flex-row justify-between  py-3  relative">
        <div className="">
          <h1 className="font-bold text-xl ">Logo</h1>
        </div>

        <div className="flex flex-row  justify-between  ">
          <div>
            <button
              className="block md:hidden font-bold cursor-pointer transition-all duration-200 hover:scale-95"
              onClick={() => {
                setSlidder(slidder === -240 ? 0 : -240);
              }}
            >
              <i className="ri-menu-line text-2xl "></i>
            </button>
          </div>

          <div className="hidden md:flex gap-4 items-center w-full">
            {menu?.map((item, index) => (
              <NavLink
                to={item.href}
                key={index}
                className={`font-medium text-lg  ${
                  item.href === location.pathname ? "text-blue-500 " : ""
                } hover:text-blue-500  hover:underline transition-all duration-200`}
              >
                {item.title}
              </NavLink>
            ))}

            <div className="flex gap-4">
              <button className="hover:scale-90 transition-all duration-200">
                <Link
                  to="/login"
                  className="font-bold text-white bg-blue-500 rounded-md py-2 px-4 w-fit hover:bg-blue-600 "
                >
                  Login
                </Link>
              </button>
              <button className="hover:scale-90 transition-all duration-200">
                <Link
                  to="/signup"
                  className="font-bold text-white bg-orange-600 rounded-md py-2 px-4 w-fit hover:bg-orange-700 cursor-pointer"
                >
                  Signup
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <div
          className="absolute top-14 overflow-hidden pt-6 pb-10 min-w-[220px] bg-gray-100 shadow-md rounded-tl-md rounded-bl-md transition-all duration-300 text-center flex justify-center"
          style={{
            right: `${slidder}px`,
          }}
        >
          <div className="flex flex-col gap-4 items-center ">
            {menu?.map((item, index) => (
              <NavLink
                to={item.href}
                key={index}
                className={`font-medium text-lg  ${
                  item.href === location.pathname ? "text-blue-500 " : ""
                } hover:text-blue-500  hover:underline transition-all duration-200`}
              >
                {item.title}
              </NavLink>
            ))}

            <div className="flex flex-col gap-8">
              <button className="hover:scale-90 transition-all duration-200">
                <Link
                  to="/login"
                  className="font-bold text-white bg-blue-500 rounded-md py-2 px-4 w-fit hover:bg-blue-600 "
                >
                  Login
                </Link>
              </button>
              <button className="hover:scale-90 transition-all duration-200">
                <Link
                  to="/signup"
                  className="font-bold text-white bg-orange-600 rounded-md py-2 px-4 w-fit hover:bg-orange-700 cursor-pointer"
                >
                  Signup
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
