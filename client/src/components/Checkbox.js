/* eslint-disable */
import unchecked from './img/unchecked.svg';
import checked from './img/checked.svg';

const Checkbox = ({ exercise, checkbox, fetchData }) => {
  const toggleCompleted = e => {
    fetch(`/api/db/${exercise.id}/${checkbox.checkboxID}`, {
      method: 'PUT',
    });

    fetchData();
  };

  return (
    <span
      onClick={toggleCompleted}
      className={`checkbox ${checkbox.completed ? 'checkbox--checked' : ''}`}
    >
      <i className={`checkbox__arm ${checkbox.completed ? 'hide' : ''}`}></i>
      <img
        src={unchecked}
        className={`checkbox__arm ${checkbox.completed ? 'hide' : ''}`}
      />
      <p className={`checkbox__number ${checkbox.completed ? 'hide' : ''}`}>
        {checkbox.reps}
      </p>
      <img
        src={checked}
        className={`checkbox__arm ${checkbox.completed ? '' : 'hide'}`}
      />
    </span>
  );
};

export default Checkbox;
