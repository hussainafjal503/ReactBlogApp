import {createSlice} from '@reduxjs/toolkit';
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	query,
	where,
  } from "firebase/firestore";
  import firebaseConfigeApp from "../../firebase";
  
const DB = getFirestore(firebaseConfigeApp);

const blogSlice=createSlice({
	name:"blog",
	initialState:{
		loding:false,
		message:null,
		error:null,
		AllblogData:null,
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











export default blogSlice.reducer;
