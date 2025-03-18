import {createSlice} from '@reduxjs/toolkit'
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword
  } from "firebase/auth";
  import firebaseConfigeApp from '../../firebase';


  const auth=getAuth(firebaseConfigeApp);

const authSlice=createSlice({
	name:"auth",
	initialState:{
		message:null,
		error:null,
		user:null,
		loading:false,
		isAuthenticated:false
	},
	reducers:{
		registerRequest:(state,action)=>{
				state.loading=true;
				state.error=null;
				state.message=null;
				state.user=null;
			
		},
		registerSuccess:(state,action)=>{
			state.loading=false;
			state.message="Registed Successfully..";
			
		},
		registerFailed:(state,action)=>{
			state.loading=false;
			state.error=action.payload;
		},



		requestLogin:(state,action)=>{
			state.isAuthenticated=false;
			state.loading=true;	
			

		},
		loginSuccess:(state,action)=>{
			state.loading=false;
			state.user=action.payload;
			state.isAuthenticated=true;
			state.message="Loged In"

		},
		failedLogin:(state,action)=>{
			state.loading=false
			state.error=action.payload
			state.user=null;
			state.isAuthenticated=false;
		

		},


		clearAllErrorRequest:(state,action)=>{
			state.error=null;
			state.user=state.user;
		}
	}
})


export const registerHandler=(data)=>async(dispatch)=>{

	dispatch(authSlice.actions.registerRequest());

	const {fullName, email,password}=data;
	try {
		 const userCredentials = await createUserWithEmailAndPassword(
		   auth,
		   email,
		   password
		 );
		 dispatch(authSlice.actions.registerSuccess());
		 dispatch(authSlice.actions.clearAllErrorRequest());
	   } catch (err) {
		 console.log(`Error occured while creating user : ${err}`);
		 dispatch(authSlice.actions.registerFailed("unable to signup please try again"));
	   }
}


export const loginHandler=(data)=>async(dispatch)=>{

	dispatch(authSlice.actions.requestLogin());
	const { email,password}=data;
	try {
		 const userCredentials = await signInWithEmailAndPassword(
		   auth,
		   email,
		   password
		 );
		console.log(userCredentials);
		const user={
			displayName:userCredentials.user.displayName,
			email:userCredentials.user.email,
			uid:userCredentials.user.uid
		}

			console.log("hello")

		 dispatch(authSlice.actions.loginSuccess(user))
		 dispatch(authSlice.actions.clearAllErrorRequest());
		} catch (err) {
			console.log(`Error occured while login user : ${err}`);
			dispatch(authSlice.actions.failedLogin("unable to login invalid Credentials"));
	   }
}

export const clearAllError=()=>(dispatch)=>{
	dispatch(authSlice.actions.clearAllErrorRequest());
}


export default authSlice.reducer;