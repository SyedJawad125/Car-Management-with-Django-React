import React from 'react'

const MakeCard = ({item}) => {
  return (
    <div class="card" style={{width: "18rem"}}>
    <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
    </div>
    </div>
  )
}

export default MakeCard
