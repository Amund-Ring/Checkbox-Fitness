/* eslint-disable */

import './App.scss';
import { useEffect, useState} from 'react';
import Header from './components/Header'; 
import Input from './components/Input'; 
import Week from './components/Week'; 
import Navbar from './components/Navbar'; 


function App() {

  const [database, updateDatabase] = useState(
    {
      "current": {
        "week": "0",
        "id": 0,
        "exercises": []
      },
      "history": {}
    }
  )
  
 

 const fetchData = () => {    
  fetch('/api/db')
    .then(res => res.json())
    .then(data => updateDatabase(data))
 }
 

  useEffect(() => {    
    fetchData();
  }, []);




  return (
    <div className="App">

        <div className="contentContainer">
          <Header />
          <Input fetchData={fetchData} />
          <Week currentWeek={database.current} fetchData={fetchData} />
          <Navbar />
        </div>
    </div>
  );
}

export default App;
