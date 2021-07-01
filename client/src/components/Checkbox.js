/* eslint-disable */
import unchecked from './unchecked.svg';
import checked from './checked.svg';

const Checkbox = ({ exercise, checkbox, fetchData }) => {

  const toggleCompleted = (e) => {
    fetch(`/api/db/${exercise.id}/${checkbox.checkboxID}`, { 
      method: 'PUT' 
    });

    fetchData();
  }
  

  return (
    <span onClick={toggleCompleted} className={`checkbox ${checkbox.completed ? 'checkbox--checked' : ''}`}>
      {/* <i className={`bx bx-circle ${checkbox.completed ? 'hide' : ''}`}></i> */}
      <i className={`checkbox__arm ${checkbox.completed ? 'hide' : ''}`}></i>
      <img src={unchecked} className={`checkbox__arm ${checkbox.completed ? 'hide' : ''}`}/>
      <img src={checked} className={`checkbox__arm ${checkbox.completed ? '' : 'hide'}`}/>
    </span>
);
}

export default Checkbox;
