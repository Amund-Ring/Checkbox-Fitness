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
  
  // const postRequest = async () => {
    // const response = await fetch('/api/db', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ database }),
    // });
    // const body = await response.text();
    
    // console.log(body);

      // const response = await fetch('/api/world', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ post: 'Testing the post route' }),
      // });
      // const body = await response.text();
  // }; 

 

  useEffect(() => {    
    fetch('/api/db')
      .then(res => res.json())
      .then(data => updateDatabase(data))
  }, []);
  



  return (
    <div className="App">
      {/* <button onClick={()=>{console.log(Math.random())}}>Button</button> */}
      {/* <button onClick={()=>{console.log( String(Math.random()).slice(2)   )}}>Button</button>  */}
      <button onClick={()=>{}}>Button</button> 
      <Input />
      <Week currentWeek={database.current}/>
      <Footer />

    </div>
  );
}

export default App;
