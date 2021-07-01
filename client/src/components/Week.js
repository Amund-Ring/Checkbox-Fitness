/* eslint-disable */
import Exercise from "./Exercise";

const Week = ( { currentWeek, fetchData } ) => {

  


  return (
    <main className="week">
        <h2 className="week__title">Week {currentWeek.week}</h2>
  
        {currentWeek.exercises.map(exercise => (
          <Exercise key={exercise.id} exercise={exercise} fetchData={fetchData}/>
        ))}
        
        <button className="week__button">New week</button>
      </main>
  );
}

export default Week;
