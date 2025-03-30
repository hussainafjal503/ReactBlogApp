import React from 'react'
import photo from "../../assets/aboutphot.jpg";

function About() {
  return (
	<div className='py-15 min-h-[600px] w-full '>
		<div className="flex flex-col md:flex-row items-center justify-between p-6 ml-auto md:ml-20 mr-auto md:mr-10">
     
     
		 {/* Left Side*/}
	  <div className="w-full md:w-1/2 text-center md:text-left  ">
        <h1 className=" text-4xl md:text-6xl font-bold mb-4"><span className='text-orange-400'>A</span>bout</h1>
        <p className="text-lg text-center text-justify">
          This is a paragraph that describes the content of the blog. It's a
          brief introduction or summary of what the blog is about.
		  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis id, esse asperiores voluptatibus ex voluptates ea non veniam? Libero quia harum iure omnis soluta esse dolor minus, minima explicabo, vero mollitia obcaecati ratione voluptates itaque molestias velit eos voluptatem laudantium beatae. Similique eveniet beatae deleniti pariatur vero libero non necessitatibus a qui culpa officiis quisquam sint aperiam dolorem est consequatur cumque quasi rerum, provident asperiores iste, sed debitis officia. Repellendus voluptatem deserunt similique quaerat labore maxime. Facilis ad assumenda ducimus commodi explicabo at, vero beatae. Tenetur officiis, aperiam repudiandae nemo facere blanditiis 
        </p>
		<div className=' mt-20 md:mt-20'>
			<div className='mb-5'>
			<h1 className='text-4xl md:text-6xl font-bold '>Our <br /><span className='text-orange-400'>M</span>ission</h1>
			
			<p className='text-blue-400 text-lg text-center m-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				 Ratione, sed! Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor
				 e nostrum optio praesentium labore laborum? Soluta iste aut magnam ullam?
			</p>
			</div>

		</div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <img
          src={photo}  alt=""
          className="   h-auto object-cover transition-all duration-300 hover:shadow-lg hover:scale-95 mx-auto  rounded-4xl md:h-[500px]  shadow-md shadow-blue-200 hover:shadow-blue-300  "
        />
		<p className='text-lg mt-10 md:mt-6 md:text-center text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit
			 numquam veritatis nesciunt, consequuntur molestiae doloribus
			 accusamus quos, quas earum aut omnis veniam aperiam saepe suscipit neque animi fugit dicta.
			 
	    </p>
      </div>
	  </div>
    </div>
	  
	
  )
}

export default About
