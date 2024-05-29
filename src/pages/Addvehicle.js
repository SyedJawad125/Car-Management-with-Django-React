import {React, useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addvehicle = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [purchase, setPurchase] = useState('')
  const [price, setPrice] = useState('')
  const [make, setMake] = useState('')
  const [image, setImage] = useState(null)


  const [makeRecords, setMakeRecords] = useState([])

// useFfect is used for Select dropdown.
  useEffect(()=>{
    const fetchMake = async () =>{
      const res = await axios.get('http://localhost:8000/base/make')
      try{
          if (res){
            setMakeRecords(res.data.data)
          }
      }
      catch (error){
          console.log('error occured', error)
      }
  }
  fetchMake();
  }, [])



// handleSubmit is used for data save in server.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {


      // preparing form data
      const formData = new FormData();
      formData.append('name',name)
      formData.append('model',model)
      formData.append('color',color)
      formData.append('purchase_rate',purchase)
      formData.append('price',price)
      formData.append('make',make)
      formData.append('image',image)
     

      // const payload = {"name":name , "model":model, "color":color , "purchase_rate":purchase , "price":price, "make":make}
      
      const response = await axios.post('http://localhost:8000/base/vehicle', formData , {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response){
        console.log('Response:', response.data);
        navigate('/vehiclelist', {state: {message: 'Vehicle Added!'}})
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
          <label for="name" class="form-label">Name</label>
          <input type="name" class="form-control" id="name" aria-describedby="name"  value={name}
            onChange= {e => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="model" class="form-label">Model</label>
          <input type="text" class="form-control" id="model" aria-describedby="model" value={model}
            onChange= {e => setModel(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="color" class="form-label">Color</label>
          <input type="text" class="form-control" id="color" aria-describedby="color" value={color}
            onChange= {e => setColor(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="purchase" class="form-label">Purchase Rate</label>
          <input type="text" class="form-control" id="purchase" aria-describedby="purchase" value={purchase}
            onChange= {e => setPurchase(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="text" class="form-control" id="price" aria-describedby="price"  value={price}
            onChange= {e => setPrice(e.target.value)} />
        </div>

        <select class="form-select" aria-label="Default select example" onChange={e => setMake(e.target.value)}>
        <option selected>Select Make</option>

          { makeRecords ?
            makeRecords.map(item => (
              <option value={item.id} key={item.id}>{item.name}</option>
            ))
            :
            <option selected>No Records</option>
          }

        </select>
       
        <div class="form-group">
          <label for="image">Upload Image</label>
          <input type="file" class="form-control-file" id="image" onChange={(e)=> setImage(e.target.files[0])}/>
        </div>

        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default Addvehicle