import React from 'react'
import {Bar,Pie,Line} from 'react-chartjs-2'
import{Chart as ChartJS} from 'chart.js/auto'

function BarChart({chartdata}) {
  return (
    <div style={{display:'flex',width:500}}>
        <Bar data={chartdata} />

    </div>
  )
}

export default BarChart