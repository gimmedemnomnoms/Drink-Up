import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import dropLogo from '/drop.svg'

import './App.css'
import Timer from './Timer';
import IntervalSelector from './IntervalSelector';
import { playRandomAudio } from './AudioPlayer';
//import Reminder from './Reminder';

function App() {
  const [selectedInterval, setSelectedInterval] = useState(10);
  const handleIntervalChange = (interval) => {
    setSelectedInterval(interval);
  };
  const handleTimerComplete = () => {
    playRandomAudio();
  };


  return (
    <>
      <div className="App">
        <header>
          <h1>Stay Hydrated!</h1>
        <img src={dropLogo} className="logo" alt="drop logo" />
        <h1>
          
        </h1>
          <div> 
            <IntervalSelector selectedInterval={selectedInterval} onSelectInterval={handleIntervalChange} />
          </div>
          <div className='timer'>
            <Timer interval={selectedInterval} onTimerComplete={handleTimerComplete} />
          </div>

        </header>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      
    </>
  )
}

export default App
