import logo from './logo.svg';
import './App.css';
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
  setInterval(updateDate , 36000);
  
  return (
    <>
    <h1>{currentTime}</h1>
    <h2>{currentDate}</h2>
    {/* <button onClick={updateTIme}>Get Current Time</button> */}
    </>
  );
}

export default App;
