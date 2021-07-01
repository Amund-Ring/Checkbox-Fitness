/* eslint-disable */
import Exercise from "./Exercise";

const Week = ( { currentWeek } ) => {

  // const exerciseList = currentWeek.exercises.map(exercise => {
  //   console.log('hehe');
  // });



  return (
    <main className="week">
        <h2 className="week__title">Week {currentWeek.week}</h2>
  
        {currentWeek.exercises.map(exercise => (
          <Exercise key={exercise.id} exercise={exercise}/>
        ))}
        
      
      </main>
  );
}

export default Week;
