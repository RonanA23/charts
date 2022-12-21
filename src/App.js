import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {UserData} from './data'
import BarChart from './Bar';
import LineChart from './LineChart';
import PieChart from './PieChart';

function App() {
  const[userData,setUserData]=useState({
    labels:UserData.map((data)=>data.year),
    datasets:[
      {label:'Users Gained',
       data:UserData.map((data)=>data.userGain),
       backgroundColor:['red','gray'],
       borderColor:'black',
       borderWidth:2,
    }
    ]
  })
  return (
    <div className="App">
    <p>Playground</p>
    <div style={{width:700,display:'flex'}}>
    <BarChart chartdata={userData}/>
    <LineChart chartdata={userData}/>
    <PieChart chartdata={userData}/>
    </div>
    
    </div>
  );
}

export default App;
