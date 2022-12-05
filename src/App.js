import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React , {useState} from 'react';

function App() {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [currentTime, setcurrentTime] = useState(time);
  const [currentDate, setCurrentDate] = useState(date);

  const updateTIme = () => {
    time = new Date().toLocaleTimeString();
    setcurrentTime(time);
  }

  const updateDate = () => {
    date = new Date().toLocaleDateString();
    setCurrentDate(date);
  }
  
  setInterval(updateTIme , 1000);
  setInterval(updateDate , 10000);
  
  return (
    <div className='text-center font-monospace'>
      <div className='position-absolute top-50 start-50 translate-middle'>
        <h1 className='fw-bold'>{currentTime}</h1>
        <h4>{currentDate}</h4>
      </div>
    </div>
  );
}

export default App;
