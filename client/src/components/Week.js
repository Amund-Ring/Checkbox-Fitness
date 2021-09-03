/* eslint-disable */
import Exercise from './Exercise';

const Week = ({ showWeek, currentWeek, fetchData }) => {
  const newWeek = e => {
    e.preventDefault();

    fetch('/api/db/new', {
      method: 'PUT',
    });

    fetchData();
  };

  if (showWeek) {
    return (
      <main className="week">
        <h2 className="week__title">Week {currentWeek.week}</h2>

        {currentWeek.exercises.map(exercise => (
          <Exercise
            key={exercise.id}
            exercise={exercise}
            fetchData={fetchData}
          />
        ))}

        <button onClick={newWeek} className="week__button">
          New week
        </button>
      </main>
    );
  } else {
    return '';
  }
};

export default Week;
