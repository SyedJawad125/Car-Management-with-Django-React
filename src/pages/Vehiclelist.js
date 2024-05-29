import {React, useEffect, useState} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'
// import Card from '../components/VechileCard'   //Props
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Vehiclelist = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [records, setRecords] = useState([])
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)

    // const [delPopup, setDelPopup] = useState(false)


    useEffect(()=>{

        if (location.state && location.state.message){
          toast.success(location.state.message)
          navigate('/vehiclelist', {state: ''})
        }
        else if (flag == true){
          toast.success('Vehicle deleted')
          setFlag(false)
        }

        const receiveData = async () =>{
            const res = await axios.get('http://localhost:8000/base/vehicle')
            try{
                if (res){
                    setRecords(res.data.data)
                    setData(res.data)
                }
            }
            catch (error){
                console.log('error occured', error)
            }
        }
        receiveData();
        
    },   [flag, location.state])


    const deleteRecord = async (id) => {
        try{
          const res = await axios.delete(`http://localhost:8000/base/vehicle?id=${id}`)
    
          if (res){
            console.log('deleted successfully')
            setFlag(true)
          }
        }
        catch (error){
          console.log(error)
        }
      }

    const updateRecord = async (item) => {
        navigate('/update/vehicle', {state: {data: item}})
    }



  return (
    <div class='container' style={{ marginLeft: '200px' }} >
        <h2 class='mt-4'>Vehicles are Available</h2>

        <Link type="submit" class="btn btn-primary mt-3" to='/add/vehicle'>Add Vehicle</Link>
        
        <br/><br/>

        {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

        <div class="row">
            
            { records ? 
            records.map(item => (
                <div class="card" style={{width: "18rem"}}>
                    <img src={`${item.image}`} alt="Jane" style={ {width: '70%'} } />
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.model}</p>
                        <p class="card-text">{item.make.name}</p>
                        <button class='btn btn-danger'onClick={()=> deleteRecord(item.id)}>Delete</button>
                        <button class='btn btn-primary mx-2'onClick={()=> updateRecord(item)}>Update</button>

                    </div>
                </div>
    )) : 
    <p>Loading....</p>
    }
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Vehiclelist