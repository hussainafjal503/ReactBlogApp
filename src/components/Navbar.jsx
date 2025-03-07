import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation,Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const {user} =useSelector(state=>state.auth);
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

  if(!user){
    menu.splice(2,2);
  
  }
  useEffect(()=>{
    
  },[user])
  return (
    <div className=" -z-10 w-full fixed top-0 left-0 shadow-lg ">
      <nav className="md:w-10/12 mx-auto flex justify-between py-3">
        <div>
          <h1 className="font-bold text-xl ">Logo</h1>
        </div>
        <div className="flex gap-4 items-center">
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
              <Link to="/login" 
			  className="font-bold text-white bg-blue-500 rounded-md py-2 px-4 w-fit hover:bg-blue-600 ">Login</Link>
            </button>
            <button  className="hover:scale-90 transition-all duration-200">
			<Link 
				to="/signup"
			className="font-bold text-white bg-orange-600 rounded-md py-2 px-4 w-fit hover:bg-orange-700 cursor-pointer">Signup</Link>
				</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
