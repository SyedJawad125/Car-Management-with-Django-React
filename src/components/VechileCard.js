import React from 'react'
import axios from 'axios'



const VechileCard = ({item}) => {

  const deleteRecord = async (id) => {
    try{
      const res = await axios.delete(`http://localhost:8000/base/vehicle?id=${id}`)

      if (res){
        console.log('deleted successfully')
      }
    }
    catch (error){
      console.log(error)
    }

  }


  return (
    <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.model}</p>
                <p class="card-text">{item.make}</p>
                <button class='btn btn-danger'onClick={()=> deleteRecord(item.id)}>Delete</button>
            </div>
        </div>
  )
}

export default VechileCard


