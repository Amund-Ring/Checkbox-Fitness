/* eslint-disable */
import { useRef } from 'react';

const Input = ({ showWeek, fetchData }) => {
  if (!showWeek) {
    return '';
  }

  const exerciseInputField = useRef();
  const setsInputField = useRef();
  const repsInputField = useRef();

  const inputIsValid = () => {
    if (
      !exerciseInputField.current.value ||
      !setsInputField.current.value ||
      !repsInputField.current.value
    ) {
      return false;
    } else if (!/^\d+$/.test(setsInputField.current.value)) {
      return false;
    } else if (!/^\d+$/.test(repsInputField.current.value)) {
      return false;
    }

    return true;
  };

  const flashRed = () => {
    exerciseInputField.current.classList.add('input__exercise--flashRed');
    setsInputField.current.classList.add('input__sets--flashRed');
    repsInputField.current.classList.add('input__reps--flashRed');
    setTimeout(() => {
      exerciseInputField.current.style.transition = 'all 3.5s';
      setsInputField.current.style.transition = 'all 3.5s';
      repsInputField.current.style.transition = 'all 3.5s';
      exerciseInputField.current.classList.remove('input__exercise--flashRed');
      setsInputField.current.classList.remove('input__sets--flashRed');
      repsInputField.current.classList.remove('input__reps--flashRed');
    }, 200);
    exerciseInputField.current.style.transition = 'all 0s';
    setsInputField.current.style.transition = 'all 0s';
    repsInputField.current.style.transition = 'all 0s';
  };

  const flashGreen = () => {
    exerciseInputField.current.classList.add('input__exercise--flashGreen');
    setsInputField.current.classList.add('input__sets--flashGreen');
    repsInputField.current.classList.add('input__reps--flashGreen');
    setTimeout(() => {
      exerciseInputField.current.style.transition = 'all 3.5s';
      setsInputField.current.style.transition = 'all 3.5s';
      repsInputField.current.style.transition = 'all 3.5s';
      exerciseInputField.current.classList.remove(
        'input__exercise--flashGreen'
      );
      setsInputField.current.classList.remove('input__sets--flashGreen');
      repsInputField.current.classList.remove('input__reps--flashGreen');
    }, 200);
    exerciseInputField.current.style.transition = 'all 0s';
    setsInputField.current.style.transition = 'all 0s';
    repsInputField.current.style.transition = 'all 0s';
  };

  const clearFields = () => {
    exerciseInputField.current.value = '';
    setsInputField.current.value = '';
    repsInputField.current.value = '';
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!inputIsValid()) {
      flashRed();
      return;
    }

    await fetch('/api/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: exerciseInputField.current.value,
        sets: setsInputField.current.value,
        reps: repsInputField.current.value,
      }),
    });

    flashGreen();
    clearFields();
    fetchData();
  };

  return (
    <aside className="input">
      <form className="input__form">
        <span>
            <label htmlFor="input__exercise">Exercise: </label>
          <input
            ref={exerciseInputField}
            type="text"
            className="input__exercise"
            size="20"
            maxLength="16"
          ></input>
        </span>

        <span>
            <label htmlFor="input__sets">Sets: </label>
          <input
            ref={setsInputField}
            type="text"
            className="input__sets"
            size="3"
            maxLength="3"
          ></input>
        </span>

        <span>
            <label htmlFor="input__reps">Reps: </label>
          <input
            ref={repsInputField}
            type="text"
            className="input__reps"
            size="3"
            maxLength="3"
          ></input>
        </span>

        <span className="input__buttonSpan">
          <button
            onClick={handleSubmit}
            type="submit"
            className="input__button"
          >
            Add
          </button>
        </span>
      </form>
    </aside>
  );
};

export default Input;
