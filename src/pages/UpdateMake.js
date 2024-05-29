import {React, useState } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const UpdateMake = () => {
  const location = useLocation()
  const data = location.state.data
  const navigate = useNavigate()
  const [name, setName] = useState(data.name)

  console.log('name', name)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // id=request.data
      const payload = {"id": data.id, "name":name}
      const response = await axios.patch('http://localhost:8000/base/make', payload , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response){
        navigate('/makelist', {state: {message: 'Vehicle Updated!'}})
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div class='container' style={{ marginLeft: '200px' }}>
     <form class='mt-3' onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">Name Of Company</label>
          
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp" 
            value={name}
            onChange= {e => setName(e.target.value)}
          />
        
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
     </form>

                    {/* <ToastContainer /> */}
 
    </div>
  )
}

export default UpdateMake