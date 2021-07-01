/* eslint-disable */
const Checkbox = ({ checkbox }) => {

  const toggleCompleted = (e) => {
    console.log('click');
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.key);
  }
  

  return (
    <span onClick={toggleCompleted} className={`checkbox ${checkbox.completed ? 'checkbox--checked' : ''}`}>
      <i className={`bx bx-circle ${checkbox.completed ? 'hide' : ''}`}></i>
      <i className={`bx bx-check-circle ${checkbox.completed ? '' : 'hide'}`}></i>
    </span>
);
}

export default Checkbox;
