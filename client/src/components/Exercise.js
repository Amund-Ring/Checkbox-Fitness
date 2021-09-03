/* eslint-disable */
import Checkbox from './Checkbox';

const Exercise = ({ exercise, fetchData }) => {
  const completedSets = exercise.checkboxes.filter(
    checkbox => checkbox.completed === true
  ).length;
  const completedReps = completedSets * exercise.reps;
  const totalReps = exercise.checkboxes.length * exercise.reps;

  const deleteCard = () => {
    fetch(`/api/db/${exercise.id}`, {
      method: 'DELETE',
    });

    fetchData();
  };

  return (
    <fieldset className="exercise">
      <legend className="exercise__description">{exercise.description}</legend>
      <i className="bx bx-x-circle exercise__cross" onClick={deleteCard}></i>

      <div className="exercise__checkboxArea">
        {exercise.checkboxes.map((checkbox, index) => (
          <Checkbox
            key={index}
            exercise={exercise}
            checkbox={checkbox}
            fetchData={fetchData}
          />
        ))}
      </div>

      <h3 className="exercise__total">
        Completed: {completedReps} / {totalReps}
      </h3>
    </fieldset>
  );
};

export default Exercise;
