import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buttonpage = () => {

    const navigate = useNavigate()

    const makeRecord = async () => {
        navigate('/listpage')
    }

  return (
    <div class='container' style={{ marginLeft: '200px' }}>
        <h1>Buttonpage</h1>
        <button type="button" class="btn btn-primary mx-2" onClick={()=> makeRecord()}>Make list</button>
        <button type="button" class="btn btn-secondary mx-2">Secondary</button>
        <button type="button" class="btn btn-success mx-2">Success</button>
        <button type="button" class="btn btn-danger mx-2">Danger</button>
        <button type="button" class="btn btn-warning mx-2">Warning</button>




    </div>
  )
}

export default Buttonpage