import React,{useEffect, useState} from "react";
import bgLogo from "../../assets/bg.jpg";
import {Link,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert';
import {toast} from 'react-toastify'
import { useDispatch,useSelector } from "react-redux";
import { loginHandler,clearAllError } from "../../redux/slices/authSlice";



function Login() {

  const {message,loading,isAuthenticated,error}=useSelector(state=>state.auth);
  // console.log(message);
  const obj = {
    email: "",
    password: "",
  };
  const navigateTo = useNavigate();
  const dispatch=useDispatch();
  const [formValue, setFormValue] = useState(obj);

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = formValue;
    if ( !email || !password) {
      new Swal({
        icon: "warning",
        text: "please fill the required text",
      });
      return;
    }

    if (!email.includes("@")) {
      new Swal({
        icon: "warning",
        text: "please Enter valid Email..",
      });
      return;
    }

    if (password.length < 8) {
      new Swal({
        icon: "warning",
        text: "Password must more than 8 character",
      });
      return;
    }

        dispatch(loginHandler(formValue));
       
  };

useEffect(()=>{
  if(message && isAuthenticated){
    toast.success(message);
    navigateTo('/');

  }
  if(error){
    toast.error(error);
    dispatch(clearAllError())
  }

},[message,loading,isAuthenticated,error]);

  return (
    <div
      className="h-screen w-screen overflow-x-hidden overflow-y-hidden bg-white "
      style={{
        background: `url(${bgLogo})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center h-full flex-col">
        <form
          action=""
          className="flex flex-col gap-6"
          onSubmit={submitHandler}
        >
          <i className="ri-phone-lock-line font-bold text-6xl text-center text-white"></i>

          <div className="bg-transparent border border-gray-100 rounded-full  py-2 px-6 text-white">
            <i className="ri-user-fill"></i>
            <input
              type="text"
              placeholder="Email"
              value={formValue.email}
              name="email"
              className="outline-none border-none py-1 pl-4"
              onChange={inputHandler}
            />
          </div>

          <div className="bg-transparent border border-gray-100 rounded-full  py-2 px-6 text-white">
            <i className="ri-rotate-lock-line"></i>
            <input
              type="text"
              placeholder="password"
              value={formValue.password}
              name="password"
              className="outline-none border-none py-1 pl-4"
              onChange={inputHandler}
            />
          </div>
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="spinner " style={{
                fontSize:'12px'
              }}></div>
            </div>
          ) : (
            <button
              type="submit"
              className="font-bold text-white bg-rose-500 rounded-full py-2 px-6 transition-all duration-200 hover:bg-rose-600 hover:scale-90 cursor-pointer"
            >
              Submit
            </button>
          )}
        </form>

        <div className="mt-4 flex justify-between gap-12">
          <Link to="/signup">Create an Account</Link>
          <button>NEED HELP?</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
