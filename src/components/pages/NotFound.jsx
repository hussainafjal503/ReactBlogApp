import React from 'react'
import notfound from '../../assets/notfoun.avif'
import {useNavigate} from 'react-router-dom'

function NotFound() {
const navigateTo=useNavigate();
const homeHandler=()=>{
	navigateTo("/")
}

  return (
	<div className='fixed top-0 z-50 h-screen w-screen overflow-hidden bg-white flex flex-col items-center justify-center'>
		<p className='font-bold text-red-700 text-8xl '>! 404 !</p>
		<img src={notfound} alt=""
			className='h-[350px]'
		/>

		<div className='space-y-2'>
			<p className='font-bold text-3xl text-center'>Oops !!</p>
			<p className='font-semibold text-xl'>The source you are trying to access is not Available</p>
			<button className='cursor-pointer hover:scale-105 font-bold text-white bg-blue-500 rounde-md py-1 px-4 w-full rounded-lg hover:bg-blue-600 transition-all duration-200 ' 
			onClick={homeHandler}
			>Back to Home</button>
		</div>
	  
	</div>
  )
}

export default NotFound
