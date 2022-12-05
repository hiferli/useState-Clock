import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

function App() {
  let time = new Date().toLocaleTimeString ();
  const [currentTime, setcurrentTime] = useState(time);
  
  const updateTIme = () => {
    time = new Date().toLocaleTimeString();
    setcurrentTime(time);
  }
  
  setInterval(updateTIme , 1000);
  
  return (
    <>
    <h1>{currentTime}</h1>
    {/* <button onClick={updateTIme}>Get Current Time</button> */}
    </>
  );
}

export default App;
