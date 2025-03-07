import React, { useState } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { useSelector } from "react-redux";
import BtnButton from "../../Reusable/BtnButton";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  console.log(user?.displayName);

  const avatar = createAvatar(lorelei, {
    seed: user?.displayName,
    // ... other options
  });
  const svg = avatar.toDataUri();

  //   function started;;

  const [edit, setEdit] = useState(false);

  const editHandler = () => {
    setEdit(!edit);
  };

  return (
    <div className=" mt-25 md:mt-20 px-6 max-w-full flex flex-col gap-4">
      <div className=" font-bold text-lg md:text-4xl mb-1 md:mb-4">
        <h2>MY PROFILE</h2>
      </div>

      {/* image section */}
      <div className="w-full font-semibold flex flex-col md:flex-row py-2 px-4 gap-4 border border-gray-300 rounded-md items-center">
        <div
          className="w-[150px] rounded-full h-[150px]"
          style={{
            background: `rbga(0,0,0,0.8)`,
          }}
        >
          <img src={svg} alt="" className="w-[150px] h-[150px] rounded-full" />
        </div>
        <div className="font-bold">
          <h4 className="text-md md:text-2xl capitalize ">
            {user?.displayName}
          </h4>
          <p className="text-gray-600 text-xs md:text-lg">{user?.email}</p>
        </div>
      </div>

      {/* personal information section */}
      <div className="w-full font-semibold py-2 gap-4 border border-gray-300 rounded-md items-center ">
        <div className="flex flex-col gap-4 py-4 px-4 md:px-12 w-full">
          <div className="w-full flex flex-row justify-between">
            <div className="font-bold text-sm md:text-2xl underline">
              <p>Personal Information</p>
            </div>

            <div>
              <BtnButton
                bgcolor={"#2B7FFF"}
                hovercolor={"#F54A00"}
                textcolor={"white"}
                handler={editHandler}
              >
                Edit
                <i className="ri-pencil-fill ml-2"></i>
              </BtnButton>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-28">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="font-medium text-gray-400 ">
                  Full Name
                </label>
                <p className="font-semibold ">User full name</p>
              </div>

              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="font-medium text-gray-400 ">
                  Email Address
                </label>
                <p className="font-semibold ">example@ gamil.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="font-medium text-gray-400 ">
                  Phone N0.
                </label>
                <p className="font-semibold ">0123948</p>
              </div>

              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="font-medium text-gray-400 ">
                  Bio
                </label>
                <p className="font-semibold ">not share yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* edit section */}

      {edit && (
        <div className="w-full px-4 md:px-12 mx-auto border flex flex-col gap-2 md:flex-row justify-between py-2 border-gray-300 rounded-lg ">
          <form action="" className=" flex flex-col gap-6 md:flex-row md:gap-28">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Mobile No.</label>
              <input
                type="text"
                placeholder="Mobile No."
                className="w-52 rounded-md py-1 px-4 bg-transparent outline-none border  border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Bio</label>
              <textarea
                type="text"
                placeholder="Mobile No."
                className="w-56 rounded-md py-1 px-4 bg-transparent outline-none border-gray-400 resize-none outline-none border  border-gray-400"
              ></textarea>
            </div>
          </form>

          <div>
            <BtnButton
              bgcolor={"#2B7FFF"}
              hovercolor={"#F54A00"}
              textcolor={"white"}
              handler={editHandler}
            >
              Save
              <i className="ri-save-fill"></i>
            </BtnButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
