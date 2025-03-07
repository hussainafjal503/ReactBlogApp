import React from 'react'

function BtnButton({children, bgcolor,hovercolor,textcolor,handler}) {
  return (
	<button 
	className={`rounded-md font-bold bg-blue-400 text-blue-500 hover:bg-blue-300  w-fit py-1 px-2 transition-all duration-200 cursor-pointer`} 
	style={{
		color:textcolor,
		background:bgcolor,
	}}
	onMouseEnter={(e)=>e.target.style.background=`${hovercolor}`}
	onMouseLeave={(e)=>e.target.style.background=`${bgcolor}`}
	onClick={handler}
	>
	 {children}
	</button>
  )
}

export default BtnButton
