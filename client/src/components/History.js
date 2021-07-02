/* eslint-disable */

const History = ( { showWeek, history, fetchData } ) => {


    if (showWeek) {
      return '';
    }

    const setsCompleted = (exercise) => {
      const checkboxes = exercise.checkboxes;
      const number = checkboxes.filter(check => check.completed).length;
      return number;
    }

    const deleteWeek = (week) => {
      fetch(`/api/db/history/${week.weekID}`, { 
        method: 'DELETE' 
      });
      fetchData();
    }
    

    return (
      <main className="history">
          <h2 className="history__title">History</h2>
            {history.map(week => (
              <fieldset className="history__week">
                <legend>Week {week.week}</legend>
                <div className="history__textwrapper">
                  <i onClick={() => {deleteWeek(week)}} className='bx bx-x-circle history__cross'></i>
                  {week.exercises.map(exercise => {
                    return <p>{exercise.description}: {setsCompleted(exercise)}/{exercise.sets} sets - {exercise.reps * setsCompleted(exercise)} reps in total</p>;
                  })}
                </div>
              </fieldset>
            ))}

        </main>
    );

}

export default History;
