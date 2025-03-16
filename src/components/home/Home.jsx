import React, { useEffect, useState } from "react";
import Card from "../../Reusable/Card";
import logo from "../../assets/bg.jpg";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseConfigeApp from "../../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(firebaseConfigeApp);




function Home() {
	const navigateTo=useNavigate();
	const [session,setSession]=useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
		  if (user) {
			setSession(user)
		  } else {
			setSession(null);
			navigateTo("/login");
		  }
		});
	  }, []);



  return (
    <div className="mt-16 w-full">
      <div className="w-11/12 mx-auto">
        {/* recent blog section */}
        <div className="flex flex-row gap-4">
          {/* left div */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">Recent Blog post</h2>
            <img src={logo} alt="" className="w-[500px]" />
            <div>
              <span className="text-blue-500 text-sm">Author name</span>
              <h3>Blog Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                aut.
              </p>
              <div className="flex gap-4 text-blue-500">
                <span className="rounded-full w-fit bg-purple-200 py-1 px-4">
                  Design
                </span>
                <span className="rounded-full w-fit bg-purple-200 py-1 px-4">
                  Research
                </span>
                <span className="rounded-full w-fit bg-purple-200 py-1 px-4">
                  Presentation
                </span>
              </div>
            </div>
          </div>

          {/* right section */}
          <div>gfddf</div>
        </div>

        <div className="mt-10">
          <h2>All Blogs</h2>
          <div className="grid grid-cols-3 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
