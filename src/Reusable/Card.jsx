import React from "react";
import {Link} from 'react-router-dom'

function Card({data}) {
  // const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo explicabo repudiandae recusandae officia, quibusdam fuga temporibus quidem dolorem doloribus. `;


  // let today=new Date(data?.publishDate);
  // console.log(data?.publishDate)

  // console.log(data);


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

  return (
    <Link 
      to={`/view-blog/${data?.id}`}
    className="flex flex-col gap-4 max-w-[350px] border border-gray-300 rounded-md  transition-all duration-200 hover:translate-y-4 hover:scale-95 shadow-md hover:shadow-blue-400">
      <img src={data?.imageUrl && data?.imageUrl} alt="image" className="h-[250px] rounded-tl-md rounded-tr-md" />

      <div className="px-4 py-2 space-y-2 pb-6">
        <div className="flex flex-row gap-2 text-purple-600 font-semibold text-sm">
          <span>{data?.authorName ? data?.authorName :"Author Name" } </span>
          <span>
            <i className="ri-arrow-drop-right-fill"></i>
          </span>
          <span> {data?.publishDate ? new Date(data?.publishDate).toLocaleDateString() :"-----" }</span>
        </div>

        <div className="font-bold flex flex-row gap-6 justify-between items-center">
          <h3 className="text-2xl ">{data?.title ? data?.title :"Blog Title" }</h3>
          <span>
            <i className="ri-shake-hands-line text-2xl"></i>
          </span>
        </div>

        <p
          className="text-gray-600 text-sm"
          style={{
            fontFamily: `IBM Plex Mono, monospace`,
          }}
        >
          {data?.blogData ? data?.blogData.substring(0,20) :"---------" }
        </p>

        <div className="flex flex-row flex-wrap gap-2">
          {  data?.tags ? data.tags.split(",")
            .map((item, index) => {

				const color=colorGenerator();
				// console.log(color)

              return (
                <span
                  key={index}
                  className=" px-2 rounded-full "
                  style={{
                    background: color.bg,
                    color: color.text
                  }}
                >
             {item  }
                </span>
              );
            })


            : Array(4).fill(0).map((item, index) => {

              const color=colorGenerator();
              // console.log(color)
      
                    return (
                      <span
                        key={index}
                        className=" px-2 rounded-full "
                        style={{
                          background: color.bg,
                          color: color.text
                        }}
                      >
                   {`Blog ${index}`}
                      </span>
                    );
                  })
            
            
            }
        </div>
      </div>
    </Link>
  );
}

export default Card;
