import './App.css';
import BarChart from './components/BarChart';
import { useState } from 'react';
import {Eventos} from './Data';


function App() {

   //lectura de la data
  const [userData, setUserData] = useState({
    
     labels: Eventos.map((a) => a.office),
     datasets: [{
      label: "Eventos",
      data: Eventos.map((b) => b.event),
    
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
   })
    const options = {
    scales: {
       
        y: {
            beginAtZero: true
        }
     }
 }

  return (
    <div className = "App">
      <div className= "contenedor">
      <BarChart chartData={userData} options = {options}/>
      </div>
    
    </div>
  );
 }

export default App; 