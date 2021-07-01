/* eslint-disable */
import { useRef } from 'react';

const Input = ({ fetchData }) => {

  const exerciseInputField = useRef();
  const setsInputField = useRef();
  const repsInputField = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();


    await fetch('/api/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "description": exerciseInputField.current.value,
        "sets": setsInputField.current.value,
        "reps": repsInputField.current.value
      }),
    });

    fetchData();

  }
  

  return (
    <aside className="input">
      <form className="input__form">
        <span>
          <label htmlFor="input__exercise">Exercise: </label>
          <input ref={exerciseInputField} type="text" className="input__exercise" size="8" maxLength="20"></input>
        </span>
  
        <span>
          <label htmlFor="input__sets">Sets: </label>
          <input ref={setsInputField} type="text" className="input__sets" size="4" maxLength="3"></input>
        </span>
  
        <span>
          <label htmlFor="input__reps">Reps: </label>
          <input ref={repsInputField} type="text" className="input__reps" size="4" maxLength="3"></input>
        </span>
  
        <span className="input__buttonSpan">
          <button onClick={handleSubmit} type="submit" className="input__button">Add</button>
        </span>
  
      </form>
    </aside>
  )
};

export default Input;
