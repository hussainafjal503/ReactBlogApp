
import './App.css'
import {Routes,Route} from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Profile from './components/pages/Profile'

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />


      </Routes>
      

      
    </>
  )
}

export default App
