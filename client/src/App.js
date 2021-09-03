/* eslint-disable */
import './App.scss';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Week from './components/Week';
import History from './components/History';
import Navbar from './components/Navbar';

function App() {
  const [database, updateDatabase] = useState({
    current: {
      week: '0',
      id: 0,
      exercises: [],
    },
    history: {},
  });

  const [showWeek, setShowWeek] = useState(true);

  const fetchData = () => {
    fetch('/api/db')
      .then(res => res.json())
      .then(data => updateDatabase(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="contentContainer">
        <Header />
        <Input fetchData={fetchData} showWeek={showWeek} />
        <Week
          showWeek={showWeek}
          currentWeek={database.current}
          fetchData={fetchData}
        />
        <History
          showWeek={showWeek}
          history={database.history}
          fetchData={fetchData}
        />
        <Navbar showWeek={showWeek} setShowWeek={setShowWeek} />
      </div>
    </div>
  );
}

export default App;
