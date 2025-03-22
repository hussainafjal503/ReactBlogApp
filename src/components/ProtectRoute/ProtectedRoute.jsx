import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate,Outlet} from 'react-router-dom'

function ProtectedRoute() {
	const {user, isAuthenticated}=useSelector(state=>state.auth);

	return isAuthenticated ? <Outlet/> : <Navigate to={"/login"} />

  
}

export default ProtectedRoute
