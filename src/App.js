import Contact from './pages/Contact'
import About from './pages/AboutUs'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Addvehicle from './pages/Addvehicle'
import Vehiclelist from './pages/Vehiclelist'
import Makelist from './pages/Makelist'
import Addmake from './pages/Addmake'
import Services from './pages/Services'
import Best from './pages/Best'
import Forms from './pages/Forms'
import UpdateVehicle from './pages/UpdateVehicle'
import UpdateMake from './pages/UpdateMake'
import Login from './pages/Login'
import Buttonpage from './pages/Buttonpage'
import Listpage from './pages/Listpage'



const App = ()=>{
  return(
    <div>
      <Navbar/>
       
       {/* <Home />

       <About />

       <Forms />

       <Best />

       <Makelist />

       <Vechilelist />

       <Contact /> */}



      <Routes>

        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/forms' element={<Forms/>}  />
        <Route path='/services' element={<Services/>} />
        <Route path='/best' element={<Best/>}  />
        <Route path='/makelist' element={<Makelist/>}  />
        <Route path='/vehiclelist' element={<Vehiclelist/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/add/Addmake' element={<Addmake/>}  />
        <Route path='/add/vehicle' element={<Addvehicle/>}  />
        <Route path='/update/vehicle' element={<UpdateVehicle/>}  />
        <Route path='/update/make' element={<UpdateMake/>}  />
        <Route path='buttonpage' element={<Buttonpage/>}   />
        <Route path='listpage' element={<Listpage/>}   />
        <Route path='/login' element={<Login/>}  />
      </Routes>

    </div>
  )
}


export default App