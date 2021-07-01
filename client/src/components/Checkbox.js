const Checkbox = ({ checkbox }) => (
    <span className={`checkbox ${checkbox.completed ? 'checkbox--checked' : ''}`}>
      <i className={`bx bx-circle ${checkbox.completed ? 'hide' : ''}`}></i>
      <i className={`bx bx-check-circle ${checkbox.completed ? '' : 'hide'}`}></i>
    </span>
);

export default Checkbox;
