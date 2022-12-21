import React from 'react'
import {Line} from 'react-chartjs-2'

function LineChart({chartdata}) {
  return (
    <div style={{width:'400px',height:'500px'}}>
     <Line data={chartdata}/>
    </div>
    
  )
}

export default LineChart