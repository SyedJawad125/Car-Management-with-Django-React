import {React, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const Addmake = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  console.log('name', name)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const payload = {"name":name}
      const response = await axios.post('http://localhost:8000/base/make', payload , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response){
      console.log('Response:', response.data);


      // toast.success("Make added!");

      navigate('/makelist', {state: {message: 'Maker Added!'}})
    //   setName('')
      }
      // Handle success
    } catch (error) {
      console.error('Error:', error);
      // Handle error
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
        <button type="submit" class="btn btn-primary">Submit</button>
     </form>

                    {/* <ToastContainer /> */}
 
    </div>
  )
}

export default Addmake