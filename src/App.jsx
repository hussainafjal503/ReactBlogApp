
import './App.css'
import {Routes,Route} from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Profile from './components/pages/Profile'
import Blog from './components/pages/Blog'
import AddNewBlog from './components/Blog/AddNewBlog'
import ViewBlogPage from './components/Blog/ViewBlogPage'

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/blog' element={<Blog />}/>
        <Route path='/view-blog/:id' element={<ViewBlogPage />}/>
        
        <Route path='/blog/add-new-blog' element={<AddNewBlog/>}/>


      </Routes>
      

      
    </>
  )
}

export default App
