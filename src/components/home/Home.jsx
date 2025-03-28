import React, { useEffect, useState } from "react";
import Card from "../../Reusable/Card";
import logo from "../../assets/bg.jpg";
import { getDataReduxHandler } from "../../redux/slices/BlogSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/authSlice";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { AllblogData } = useSelector((state) => state.blog);
  const [data, setData] = useState([]);
  // console.log(AllblogData);

  // console.log(Array.isArray(AllblogData));
  // const [session,setSession]=useState(null);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    dispatch(getDataReduxHandler(user));
    // setData([...AllblogData]);
  }, []);

  const today = new Date();
  const date = today.toLocaleDateString();

  function colorGenerator() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let bg = `rgba(${red},${green},${blue},0.1)`;

    let text = `rgb(${red},${green},${blue})`;

    return {
      bg,
      text,
    };
  }

  const tags = ["Design", "Research", "Presentation"];
  

  return (
    <div className="mt-16 w-full">
      <div className="w-full mx-auto">
        {/* recent blog section */}
        <div className="flex md:flex-row flex-col gap-2 w-full md:w-11/12 mx-auto">
          {/* left div */}
          <div className="flex flex-col gap-4 w-full md:w-5/12 px-6 md:px-0">
            <h2 className="font-bold text-xl">Blog post</h2>
            <img src={logo} alt="" className="w-auto md:w-[550px]" />
            <div>
              <div className="text-blue-500 font-semibold flex justify-between">
              <span className="text-blue-500 ">Author name</span>
              <span className="mr-10">{date}</span>

              </div>
              <h3 className="font-bold text-2xl">Blog Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                aut.
              </p>
              <div className="flex flex-wrap gap-4 text-xs md:text-sm mt-2">
                {tags.map((item, index) => {
                  const color = colorGenerator();

                  return (
                    <span
                      key={index}
                      className="rounded-full  px-2"
                      style={{
                        background:color.bg,
                        color:color.text
                      }}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
           
          </div>

          {/* right section */}
          <div className="w-full md:w-7/12 md:mt-11 mt-4 px-6 md:px-0">
            {
              Array(2).fill({name:"Author Name",
                icon:logo,
                title:"Blog Title",
                date:date, text:` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis enim culpa alias eum! Nihil nostrum eveniet obcaecati hic ratione quas.`}).map((item,index)=>(
                <div className="flex md:flex-row flex-col md:gap-4 gap-12 md:mb-4 mb-8" key={index}>

                  <div className="w-full md:w-5/12">
                  <img src={item.icon} alt=""  className="rounded-md h-sm"/>

                  </div>

                    <div className="w-full md:w-7/12 space-y-2">
                      <h3 className="font-bold text-2xl">{item.title}</h3>

                      <div className="flex justify-between font-semibold text-blue-600">
                        <span>{item.name}</span>
                        <span>{item.date}</span>
                      </div>

                      <p>{item.text}</p>
                      <div className="flex flex-row flex-wrap gap-2">
                        {
                          tags.map((item,index)=>{
                            const color = colorGenerator();

                  return (
                    <span
                      key={index}
                      className="rounded-full  px-2"
                      style={{
                        background:color.bg,
                        color:color.text
                      }}
                    >
                      {item}
                    </span>
                  );
                          })
                        }
                      </div>

                    </div>

                </div>
              ))


            }
          </div>
        </div>

        <div className="mt-10 w-full px-10 ">
          <h2 className="font-bold text-3xl">All Blogs</h2>
          <div className="flex flex-row gap-3 flex-wrap max-w-screen mt-10 justify-center mb-6">
            {AllblogData &&
              Object.values(AllblogData).map((item, index) => (
                <div key={index}>
                  <Card data={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
