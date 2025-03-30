import React from 'react'

function ContactPage() {
  return (
	<div className='py-15 min-h-[600px] '>
		<div className='flex flex-col md:flex-row md:px-20  py-10'>
			{/* left side */}
			<div className='w-full md:w-1/2 px-4 md:px-0'>
				<div className='md:mt-15  mt-2'>
					<h1 className='text-4xl md:text-8xl font-semibold   mb-4'>Contact Us</h1>
					<p className='text-lg  mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corrupti.</p>
					
					<a href="#rana@mail.com" className='mb-2 text-blue-400 font-bold'>contactme@blog.io</a>
					<p className=' mb-2 '>321-321-321</p>
					

				</div>


				<div className='flex   flex-col mt-8'>
				<p className=' mb-2 underline text-blue-400'>Customer Supports</p>

				<div  className='break-words text-justify'>

				<div className='' >
						<h1  className='text-lg font-medium mb-2'>Customer Supports</h1>
						<p className='text-lg  mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
							maiores expedita dolorem impedit pariatur non enim molestiae voluptas, beatae
							 nesciunt totam nobis omnis nemo consequatur fuga vero natus aspernatur mollitia?
						</p>
					</div>
					<div className='ml-3' >
						<h1 className='text-lg font-medium mb-2 '>Feedback and Suggestions</h1>
						<p className='text-lg mb-2 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							voluptatum repellat suscipit iste neque in maiores. Dolore ipsa culpa maxime
							 impedit ex, aspernatur eligendi dignissimos rem totam amet nostrum temporibus?
						</p>
					</div>
					<div className='ml-3'>
						<h1 className='text-lg font-medium mb-2'>Media Inquiries</h1>
						<p className='text-lg mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							voluptatum repellat suscipit iste neque in maiores. Dolore ipsa culpa maxime
							 impedit ex, aspernatur eligendi dignissimos rem totam amet nostrum temporibus?
						</p>
					</div>

				</div>
					
				</div>
			</div>







			{/* right side */}
			<div className='w-full md:w-1/2 mx-auto  '>
				<div className=' flex justify-center items-center min-h-screen'>
				<form action="" className='bg-gray-100 p-6 rounded-md shadow-lg w-full max-w-lg capitalize '>
					<h1  className='text-2xl font-semibold text-center mb-4'>Get In Touch</h1>
					<p className='text-center mb-6'>submit your problem.</p>
					<div  className='flex space-x-3 mb-4  flex-col md:flex-row'>
						<input type="text" placeholder='First name'className='border border-gray-200 rounded-2xl text-center p-3 w-full ' />
						<input type="text" placeholder='Last name'className='border border-gray-200 rounded-2xl text-center p-3 w-full' />
					</div>
					<div className='mb-4'>
					<input type="email" name="" id="" placeholder='email' className='border border-gray-200 rounded-2xl text-center p-3 w-full' />
					</div>
					<div className='mb-4'>
						<input type="text" name="" id=""  placeholder='mobile number' className='border border-gray-200 rounded-2xl text-center p-3 w-full'/>
					</div>
					<div className='mb-4'>
					<textarea name="text" id="" placeholder='write some things' className='resize-none border border-gray-200 rounded-2xl text-center p-3 w-full' rows={8} ></textarea>
					</div>
					<button className='bg-blue-500 text-white py-3 px-6  rounded-2xl w-full hover:bg-blue-600 cursor-pointer'>Submit</button>
				</form>
				</div>
			</div>
		</div>
	  
	  
	</div>
  )
}

export default ContactPage;
