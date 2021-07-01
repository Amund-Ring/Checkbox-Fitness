/* eslint-disable */
import Checkbox from "./Checkbox";


const Exercise = ({ exercise, fetchData }) => {

  const completedSets = exercise.checkboxes.filter(checkbox => checkbox.completed === true).length;
  const completedReps = completedSets * (exercise.checkboxes[0].reps);
  const totalReps = exercise.checkboxes.length * (exercise.checkboxes[0].reps);

  const deleteCard = () => {

    const stringy = `/api/db/${exercise.id}`;
    console.log(stringy);

    fetch(`/api/db/${exercise.id}`, { 
      method: 'DELETE' 
    });

    fetchData();
  }
  

  return (
    <div className="exercise">
      <h3 className="exercise__description">{exercise.description}</h3>
      <i className='bx bx-x-circle exercise__cross' onClick={deleteCard}></i>

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
