import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerMenu = ["Home", "About", "contact", "News & Offer"];

  return (
    <div className=" text-white w-full bg-[#183B4E] px-4 md:px-10 py-6 rounded-tl-lg rounded-tr-lg flex flex-col gap-4">
      <div className="flex md:flex-row flex-col md:justify-around">
        <div>
          <div className="space-y-1 text-orange-300">
            <h4 className="font-semibold md:text-2xl text-xl">Quick Menu</h4>
            <div className="border-b-2 md:w-40 w-20"></div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            {footerMenu.map((item, index) => (
              <Link
                key={index}
                className="transition-all duration-200 hover:text-orange-500 hover:scale-95"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4 ">
          <h2 className=" text-lg md:text-xl font-semibold uppercase text-orange-300 break-words">
            Sign up for user newsletter
          </h2>

          <div className=" w-full">
            <input
              type="text"
              placeholder="Your Email Address"
              className="bg-gray-200 rounded-tl-md rounded-bl-md placeholder:text-[#183B4E] border-none outline-none py-1 px-4 w-auto"
            />
            <button className="font-semibold text-white py-1 px-4 rounded-tr-md rounded-br-md bg-blue-700 cursor-pointer hover:bg-blue-800 transition-all duration-200 w-fit">
              Submit
            </button>
          </div>

          <div>
            <h3 className="uppercase">Follow us</h3>
            <div className="flex gap-3 items-center mt-2">
              <i class="ri-linkedin-box-fill text-2xl cursor-pointer hover:scale-95 hover:text-orange-600 transition-all duration-200"></i>
              <i class="ri-twitter-x-fill text-2xl cursor-pointer hover:scale-95 hover:text-orange-600 transition-all duration-200"></i>
              <i class="ri-facebook-circle-fill text-2xl cursor-pointer hover:scale-95 hover:text-orange-600 transition-all duration-200"></i>
              <i class="ri-youtube-fill text-2xl cursor-pointer hover:scale-95 hover:text-orange-600 transition-all duration-200"></i>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-xl uppercase text-orange-300">
            information
          </h3>
          <div className="flex flex-col gap-2">
            <p>Terms & Conditions</p>
            <p>Privacy & Policy</p>
            <p>Cookie Policy</p>
          </div>
          <div className="font-bold md:text-4xl text-2xl text-orange-600">
            ContentCrafter
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="border-b border-orange-200 w-full"></div>

        <div className="flex flex-col md:flex-row text-center md:justify-between w-full mt-2">
          <p>&copy; All Right to Team ContentCrafter </p>
          <p>Design and Developed by Team ContentCrafter</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
