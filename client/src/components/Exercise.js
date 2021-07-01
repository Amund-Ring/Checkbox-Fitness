/* eslint-disable */
import Checkbox from "./Checkbox";


const Exercise = ({ exercise }) => {

  const completedSets = exercise.checkboxes.filter(checkbox => checkbox.completed === true).length;
  const completedReps = completedSets * (exercise.checkboxes[0].reps);
  const totalReps = exercise.checkboxes.length * (exercise.checkboxes[0].reps);

  return (
    <div className="exercise">
      <h3 className="exercise__description">{exercise.description}</h3>
      <div className="exercise__checkboxArea">
  
        {exercise.checkboxes.map((checkbox, index) => (
          <Checkbox key={index} checkbox={checkbox}/>
        ))}
  
      </div>
      <h3 className="exercise__total">Completed: {completedReps} / {totalReps}</h3>
    </div>
  )
};

export default Exercise;
