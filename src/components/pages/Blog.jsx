import React, { useEffect, useState } from "react";
import BtnButton from "../../Reusable/BtnButton";
import { useNavigate } from "react-router-dom";
import Card from "../../Reusable/Card";
import { useSelector } from "react-redux";



function Blog() {
  const navigateTo = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const {AllblogData}=useSelector(state=>state.blog);
  const addNewBlogHandler = () => {
    navigateTo("/blog/add-new-blog");
  };
  

  const [userBlogData, setUserBlogData] = useState([]);


  function fetchUserBlog(){
    let response;
    if(AllblogData)
      response=AllblogData.filter((doc)=>doc.uid===user.uid);
      // console.log(response);
      setUserBlogData(response);
  }

  useEffect(() => {
    // const getData = async () => {
    //   try {

    //     const coll = collection(DB, "Blogs");
    //     const q = query(coll, where("uid", "==", user.uid));
    //     const result = await getDocs(q);
    //     // console.log(result);
    //     const tempArr = [];

    //     result.docs.forEach((doc) => {
    //       const data = doc.data();
    //       // console.log(data);

    //       if (data.uid === user.uid) {
    //         tempArr.push(data);
    //       }
    //     });

    //     setBlogData(tempArr);
    //   } catch (err) {
    //     console.log(`Error occured while getting user data : ${err}`);
    //   }
    // };

    // getData();

    fetchUserBlog();

  }, []);

  return (
    <div className="pt-22 md:pt-18 w-full px-4 md:px-8 min-h-[400px] md:min-h-[600px] ">
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

      {
        userBlogData.length!=0 ? 
        <div className="flex flex-row gap-4 flex-wrap mt-6">
        {
        userBlogData && 
        userBlogData?.map((item, index) => (
          <div>
            <Card data={item} />
          </div>
        ))}
      </div>
        : <div className="flex flex-col gap-4 items-center justify-center font-bold text-3xl h-[350px] md:h-[550px] text-gray-500">
          <p><i className="ri-rest-time-line text-6xl"></i></p>
          <p>No Blog found</p>
        </div>
      }
     



    </div>
  );
}

export default Blog;
