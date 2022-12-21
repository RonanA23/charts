import React from 'react'
import {Pie} from 'react-chartjs-2'

function PieChart({chartdata}) {
  return (
    <div style={{width:'300px',height:'300px'}}>
     <Pie data={chartdata} />
    </div>
    
  )
}

export default PieChart