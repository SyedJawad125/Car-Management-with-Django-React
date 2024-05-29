import {React, useEffect, useState} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Listpage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [records, setRecords] = useState([])
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)


    useEffect(()=>{
        

        const receiveData = async () =>{
            const res = await axios.get('http://localhost:8000/base/make')
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
                const res = await axios.delete(`http://localhost:8000/base/make?id=${id}`)
                if(res){
                    console.log('Delete Successfully')
                    setFlag(true)
                }
            }
            catch(error){
                console.log(error)
            }
         }

         const updateRecord = async (item) => {
            navigate('/update/make', {state: {data: item}})
        }
  return (
    <div class='container' style={{ marginLeft: '200px' }} >
        <h2 class='mt-4'>List Of Companies We deals Here!</h2>

        
        
        <br/><br/>

        {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

        <div class="row">
            
            { records ? 
            records.map(item => (
                <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    {/* <button class='btn btn-danger'onClick={()=> deleteRecord(item.id)}>Delete</button>
                    <button class='btn btn-primary mx-2' onClick={()=> updateRecord(item)}>Update</button> */}
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

export default Listpage