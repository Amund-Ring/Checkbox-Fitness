/* eslint-disable */

import './App.scss';
import { useEffect, useState} from 'react';
import Input from './components/Input'; 
import Week from './components/Week'; 
import Footer from './components/Footer'; 


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
      <Input fetchData={fetchData} />
      <Week currentWeek={database.current} fetchData={fetchData} />
      <Footer />

    </div>
  );
}

export default App;
