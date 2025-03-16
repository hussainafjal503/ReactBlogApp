import React, { useEffect, useState } from "react";
import BtnButton from "../../Reusable/BtnButton";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import firebaseConfigeApp from "../../firebase";
import { useSelector } from "react-redux";
import Card from "../../Reusable/Card";

const DB = getFirestore(firebaseConfigeApp);

function Blog() {
  const navigateTo = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const addNewBlogHandler = () => {
    navigateTo("/blog/add-new-blog");
  };
  

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {

        const coll = collection(DB, "Blogs");
        const q = query(coll, where("uid", "==", user.uid));
        const result = await getDocs(q);
        // console.log(result);
        const tempArr = [];

        result.docs.forEach((doc) => {
          const data = doc.data();
          // console.log(data);

          if (data.uid === user.uid) {
            tempArr.push(data);
          }
        });

        setBlogData(tempArr);
      } catch (err) {
        console.log(`Error occured while getting user data : ${err}`);
      }
    };

    getData();
  }, []);

  return (
    <div className="pt-22 md:pt-18 w-full px-4 md:px-8 ">
      {/* header sectiono */}
      <div className="flex w-full justify-between">
        <div className="font-bold text-lg md:text-4xl ">
          <p>Your Blogs</p>
          <div className="border-b-2 w-20 md:w-45"></div>
        </div>
        <div className="">
          <BtnButton
            bgcolor={"#2B7FFF"}
            hovercolor={"#F54A00"}
            textcolor={"white"}
            handler={addNewBlogHandler}
          >
            <i className="ri-add-fill mr-2"></i>

            <span className="md:inline hidden">Add New Blog</span>

            <span className="md:hidden">New</span>
          </BtnButton>
        </div>
      </div>

      {/* blog section */}
      <div className="flex flex-row gap-4 flex-wrap mt-6">
        {blogData?.map((item, index) => (
          <div>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
