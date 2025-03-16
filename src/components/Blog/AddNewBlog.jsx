import React,{useState} from "react";
import BtnButton from '../../Reusable/BtnButton';
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert';
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux';
import { getFirestore,collection,addDoc,getDocs,query,where } from "firebase/firestore";
import firebaseConfigeApp from '../../firebase'
const DB=getFirestore(firebaseConfigeApp);



function AddNewBlog() {
  const navigateTo=useNavigate();

  const {user}=useSelector(state=>state.auth);

	const obj={
			imageUrl:"",
			authorName:"",
			publishDate:"",
			title:"",
			genere:"",
			source:"",
			blogData:"",
	}

	const [formValue,setFormValue]=useState(obj);

	const inputHandler=(e)=>{
			const {name,value}=e.target;

			setFormValue({
				...formValue,
				[name]:value
			})
	}

	const submitHandler=async(e)=>{
		e.preventDefault();

      e.preventDefault();
            try{
      
              const data ={...formValue};
              data.uid=user?.uid;
              
      
              const response=await addDoc(collection(DB,"Blogs"),data);
              // console.log(response);
              if(!response){
                new Swal({
                  icon:"warning",
                  text:"Unable to Add Your Blog"
                });
                return;
              }
              toast.success("Blog Added");

              navigateTo("/blog");
      
            }catch(err){
              console.log(`Error occured while updating profile : ${err}`);
      
            }
      


	}


  return (
    <div className="pt-20 px-4 md:px-12 w-full">
      <div className="font-bold text-3xl">
        <p>ADD NEW BLOG</p>
        <div className="border-b-4 w-56"></div>
      </div>
      <form action="" className="mt-10 flex md:flex-row flex-col gap-6 md:gap-18 w-full" >
        {/* left section */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1  w-full">
            <label htmlFor="" className="font-semibold">
              ImageUrl
            </label>
            <input
              type="text"
              placeholder="Image Url"
              className="py-1 px-4 rounded-md border border-gray-400 outline-none  w-full"
			  value={formValue.imageUrl}
			  name="imageUrl"
			  onChange={inputHandler}
            />
          </div>

          <div className="flex flex-col gap-1  w-full">
            <label htmlFor="" className="font-semibold">
              Author Name
            </label>
            <input
              type="text"
              placeholder="Auther Name"
              className="py-1 px-4 rounded-md border border-gray-400 outline-none w-full"


			  value={formValue.authorName}
			  name="authorName"
			  onChange={inputHandler}
            />
          </div>

          <div className="flex flex-col gap-1  w-full">
            <label htmlFor="" className="font-semibold">
              Publish Date
            </label>
            <input
              type="text"
              placeholder="publish Date"
              className="py-1 px-4 rounded-md border border-gray-400 outline-none w-full"
			  value={formValue.publishDate}
			  name="publishDate"
			  onChange={inputHandler}
            />
          </div>

          <div className="flex flex-col gap-1  w-full">
            <label htmlFor="" className="font-semibold">
              Title
            </label>
            <input
              type="text"
              placeholder="Blog Title"
              className="py-1 px-4 rounded-md border border-gray-400 outline-none  w-full"
			  value={formValue.title}
			  name="title"
			  onChange={inputHandler}
            />
          </div>

          <div className="flex flex-col gap-1  w-full">
            <label htmlFor="" className="font-semibold">
              Genere
            </label>
            <input
              type="text"
              placeholder="Blog Genere"
              className="py-1 px-4 rounded-md border border-gray-400 outline-none w-full"
			  value={formValue.genere}
			  name="genere"
			  onChange={inputHandler}
            />
          </div>


		  <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="font-semibold">
              Source
            </label>
            <input
              type="text"
              placeholder="Source"
              className="py-1 px-4 rounded-md border border-gray-400 outline-none w-full"
			  value={formValue.source}
			  name="source"
			  onChange={inputHandler}
            />
          </div>
        </div>

		{/* right */}
		<div className="w-full space-y-4">
			<textarea  id="" placeholder="Write Your Blog "
				className="w-full outline-none border border-gray-300 py-2 px-4 placeholder:text-blue-500 rounded-md resize-none"
			name="blogData"
			rows={15}
			value={formValue.blogData}
			onChange={inputHandler}
			
			></textarea>

			<div className="w-full">
				<BtnButton 
					bgcolor={"blue"}
					hovercolor={"orange"}
					textcolor={"white"}
					width={"full"}
					handler={submitHandler}
				>Submit</BtnButton>
			</div>
		</div>
      </form>
    </div>
  );
}

export default AddNewBlog;
