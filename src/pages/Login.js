import {React, useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const payload = {"username":username, "password":password}
          const response = await axios.post('http://localhost:8000/user/login', payload , {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (response){
            console.log('Response:', response.data);
            navigate('/', {state: {message: 'Maker Added!'}})
          }
        } catch (error) {
            // toast.error("invalid")
          console.error('Error:', error);
        }
      };


  return (
    <div class='container' style={{ marginLeft: '200px' }}>
     <form class='mt-3' onSubmit={handleSubmit}>
        <div class="mb-3">

          <label for="Username" class="form-label">Username</label>
          <input type="text" class="form-control" id="Username" aria-describedby="nameHelp" 
            value={username}
            onChange= {e => setUsername(e.target.value)}
          />

        <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" aria-describedby="nameHelp" 
            value={password}
            onChange= {e => setPassword(e.target.value)}
          />
        
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
     </form>

                    {/* <ToastContainer /> */}
 
    </div>
  )
}

export default Login