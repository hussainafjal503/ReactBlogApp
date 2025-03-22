import {createSlice} from '@reduxjs/toolkit';
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	query,
	where,
	doc,
	updateDoc,
	deleteDoc
  } from "firebase/firestore";
  import firebaseConfigeApp from "../../firebase";
import { bottts } from '@dicebear/collection';
  
const DB = getFirestore(firebaseConfigeApp);

const blogSlice=createSlice({
	name:"blog",
	initialState:{
		loding:false,
		message:null,
		error:null,
		AllblogData:null,
		updateSuccess:false,
		deleteSuccess:false
	},
	reducers:{

		getDataRequest:(state,action)=>{
			state.loding=true;
			state.message=null;
			state.error=null;
		},
		getDataSuccess:(state,action)=>{
			// console.log(action.payload);
			// const obj=[...action.payload];
			// console.log(obj);
				state.loding=false;
				state.message="data fetched";
				state.AllblogData=action.payload
		},
		getDataFailed:(state,action)=>{
			state.loding=false;
			state.message=null;
			state.error=action.payload;
		},


		updateBlogRequest(state,action){
			state.loding=true;
			state.message=null;
			state.error=null;
		},
		updateBlogSuccess(state,action){
			state.loding=false;
			state.message=action.payload;
			state.updateSuccess=true;

		},
		updateBlogFailed(state,action){
			state.loding=false;
			state.error=action.payload;
			state.updateSuccess=false;
		},



		deleteBlogRequest(state,action){
			state.loding=true;
			state.message=null;
			state.error=null;
		},
		deleteBlogSuccess(state,action){
			state.loding=false;
			state.deleteSuccess=true;
			state.message=action.payload;
		},
		deleteBlogFailed(state,action){
			state.loding=false;
			state.error=action.payload;
			state.message=null;

		},



		clearAllErrorRequest(state,action){
			state.error=null;
			
		}

	}
});







export const getDataReduxHandler=(user)=>async(dispatch)=>{
	console.log( user);
	dispatch(blogSlice.actions.getDataRequest());

	try{




		const querySnapshot = await getDocs(collection(DB, "Blogs"));
		// console.log(querySnapshot)

		const tempArr=[];
		querySnapshot.forEach((doc)=>{
			const data=doc.data();
			data.id=doc.id;
			// console.log(doc);
			tempArr.push(data);
		})

		// const coll = collection(DB, "Blogs");
        // const q = query(coll, where("uid", "==", user.uid));
        // const result = await getDocs(q);
        // console.log(result);
        // // const tempArr = [];

        // // result.docs.forEach((doc) => {
        // //   const data = doc.data();
        // //   // console.log(data);

        // //   if (data.uid === user.uid) {
        // //     tempArr.push(data);
        // //   }
        // // });

        // // setBlogData(tempArr);
		

			// console.log( tempArr);

		dispatch(blogSlice.actions.getDataSuccess(tempArr));


	}catch(err){
		console.log(`Error occured while getting blog data`);
		dispatch(blogSlice.actions.getDataFailed("unale to get data"));
	}

}



export const updataBlogReduxHandler=(data)=>async(dispatch)=>{
	dispatch(blogSlice.actions.updateBlogRequest());
	
	try{
		const ref=doc(DB,"Blogs",data.id);
		const update=await updateDoc(ref,data);
		// console.log(update)
		dispatch(blogSlice.actions.updateBlogSuccess("Updated SuccessFully"));
		dispatch(blogSlice.actions.clearAllErrorRequest());

	}catch(err){
		console.log(`Error occured while updating the blog  : ${err}`);
		dispatch(blogSlice.actions.updateBlogFailed("unable to update the blog"));
	}
}



export const deleteBlogReduxHandler=(id)=>async(dispatch)=>{
	dispatch(blogSlice.actions.deleteBlogRequest());
	try{

		const ref=doc(DB,"Blogs",id);
		const deleteData=await deleteDoc(ref);
		
		dispatch(blogSlice.actions.deleteBlogSuccess("Deleted SuccessFully.."));
		dispatch(blogSlice.actions.clearAllErrorRequest());
	}catch(err){
		console.log(`Error occured while deleting the blog : ${err}`);
		dispatch(blogSlice.actions.deleteBlogFailed("unable to delete"))
	}
}






export default blogSlice.reducer;
