/* eslint-disable */
import logo from './logo.svg';

const Checkbox = ({ exercise, checkbox, fetchData }) => {

  const toggleCompleted = (e) => {
    fetch(`/api/db/${exercise.id}/${checkbox.checkboxID}`, { 
      method: 'PUT' 
    });

    fetchData();
  }
  

  return (
    <span onClick={toggleCompleted} className={`checkbox ${checkbox.completed ? 'checkbox--checked' : ''}`}>
      <i className={`bx bx-circle ${checkbox.completed ? 'hide' : ''}`}></i>
      {/* <i className={`bx bx-check-circle ${checkbox.completed ? '' : 'hide'}`}></i> */}
      <img src={logo} className={`checkbox__arm ${checkbox.completed ? '' : 'hide'}`}/>
    </span>
);
}

export default Checkbox;
