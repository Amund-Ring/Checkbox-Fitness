import Checkbox from "./Checkbox";


const Exercise = ({ exercise }) => (

  <div className="exercise">
    <h3 className="exercise__description">{exercise.description}</h3>
    <div className="exercise__checkboxArea">

      {exercise.checkboxes.map((checkbox, index) => (
        <Checkbox key={index} checkbox={checkbox}/>
      ))}

    </div>
    <h3 className="exercise__total">Completed reps: 24</h3>
  </div>

);

export default Exercise;
