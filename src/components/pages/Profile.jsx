import React, { useEffect, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { useSelector,useDispatch } from "react-redux";
import BtnButton from "../../Reusable/BtnButton";
import { getFirestore,collection,addDoc,getDocs,query,where } from "firebase/firestore";
import firebaseConfigeApp from '../../firebase'
import {logoutReduxHandler} from '../../redux/slices/authSlice';
import {useNavigate} from 'react-router-dom'


const DB=getFirestore(firebaseConfigeApp);

function Profile() {
  const dispatch=useDispatch();
  const navigateTo=useNavigate();
  const { user } = useSelector((state) => state.auth);
  // console.log(user);

  const avatar = createAvatar(lorelei, {
    seed: user ?  user?.displayName : "john doe",

  });
  const svg = avatar.toDataUri();


const obj={
	mobile:"",
	bio:"",
}
  const [edit, setEdit] = useState(false);
  const [userData,setUserData]=useState(obj);
  const[aboutData,setAboutData]=useState(null);

  const editHandler = () => {
    setEdit(!edit);
  };

  const inputHandler=(e)=>{
	const {name,value}=e.target;

	setUserData({
		...userData,
		[name]:value
	})
  }


  const submitUserDataHandler=async(e)=>{
	e.preventDefault();
      try{

        const data ={...userData};
        data.uid=user?.uid;
        

        const response=await addDoc(collection(DB,"Users"),data);
        // console.log(response);
        setEdit(false);
        setUserData(obj);

      }catch(err){
        console.log(`Error occured while updating profile : ${err}`);

      }


  }


  useEffect(()=>{

      const getData=async()=>{

          try{
            // const querySnapshot=query(collection(DB,"Users"),where("uid",user.uid));
            // console.log(querySnapshot);

            // console.log(response);

            const coll = collection(DB, "Users");
            const q = query(coll, where("uid", "==", user.uid));  
            const result = await getDocs(q);
            
            result.docs.forEach((doc) => {
              const data = doc.data();  
              if (data.uid === user.uid) {
                setAboutData(data);
              }
            })

          
            

          }catch(err){
            console.log(`Error occured while getting user data : ${err}`);
          }


      }

      getData();



  },[])


  const logOutHandler=()=>{
    dispatch(logoutReduxHandler());
    navigateTo('/login')
  }

  /****************************xml codes *************************/
  return (
    <div className=" mt-25 md:mt-20 px-6 max-w-full flex flex-col gap-4">
      <div className=" font-bold text-lg md:text-4xl mb-1 md:mb-4 flex flex-row justify-between">
        <h2>MY PROFILE</h2>
        <button className="text-lg bg-rose-300 rounded-md py-1 px-4 transition-all duration-200 hover:bg-rose-400 hover:scale-95 cursor-pointer " onClick={logOutHandler}>LogOut <i className="ri-logout-circle-r-line ml-2"></i></button>
      </div>

      {/* image section */}
      <div className="w-full font-semibold flex flex-col md:flex-row py-2 px-4 gap-4 border border-gray-300 rounded-md items-center">
        <div
          className="w-[150px] rounded-full h-[150px]"
          style={{
            background: `rbga(0,0,0,0.8)`,
          }}
        >
          <img src={svg ? svg :""} alt="" className="w-[150px] h-[150px] rounded-full" />
        </div>
        <div className="font-bold">
          <h4 className="text-md md:text-2xl capitalize ">
            {user?.displayName}
          </h4>
          <p className="text-gray-600 text-xs md:text-lg">{user?.email}</p>
        </div>
      </div>

      {/* personal information section */}
      <div className="w-full font-semibold py-2 gap-4 border border-gray-300 rounded-md items-center ">
        <div className="flex flex-col gap-4 py-4 px-4 md:px-12 w-full">
          <div className="w-full flex flex-row justify-between">
            <div className="font-bold text-sm md:text-2xl underline">
              <p>Personal Information</p>
            </div>

            <div>
              <BtnButton
                bgcolor={"#2B7FFF"}
                hovercolor={"#F54A00"}
                textcolor={"white"}
                handler={editHandler}
              >
                Edit
                <i className="ri-pencil-fill ml-2"></i>
              </BtnButton>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-28">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="font-medium text-gray-400 ">
                  Full Name
                </label>
                <p className="font-semibold ">{user?.displayName}</p>
              </div>

              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="font-medium text-gray-400 ">
                  Email Address
                </label>
                <p className="font-semibold ">{user?.email}</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="font-medium text-gray-400 ">
                  Phone N0.
                </label>
                <p className="font-semibold ">{aboutData?.mobile}</p>
              </div>

              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="font-medium text-gray-400 ">
                  Bio
                </label>
                <p className="font-semibold ">{aboutData?.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* edit section */}

      {edit && (
        <div className="w-full px-4 md:px-12 mx-auto border flex flex-col gap-2 md:flex-row justify-between py-2 border-gray-300 rounded-lg ">
          <form action="" className=" flex flex-col gap-6 md:flex-row md:gap-28">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Mobile No.</label>
              <input
                type="text"
                placeholder="Mobile No."
				name="mobile"
				value={userData.mobile}
                className="w-52 rounded-md py-1 px-4 bg-transparent outline-none border  border-gray-400"
				onChange={inputHandler}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Bio</label>
              <textarea
                type="text"
                placeholder="share your Story.."
				name="bio"
				value={userData.bio}
				onChange={inputHandler}
                className="w-56 rounded-md py-1 px-4 bg-transparent outline-none border-gray-400 resize-none  border "
              ></textarea>
            </div>
          </form>

          <div>
            <BtnButton
              bgcolor={"#2B7FFF"}
              hovercolor={"#F54A00"}
              textcolor={"white"}
              handler={submitUserDataHandler}
            >
              Save
              <i className="ri-save-fill"></i>
            </BtnButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
