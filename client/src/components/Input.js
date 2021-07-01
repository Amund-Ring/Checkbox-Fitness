const Input = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click');
  }
  

  return (
    <aside className="input">
      <form className="input__form">
        <span>
          <label htmlFor="input__exercise">Exercise: </label>
          <input type="text" className="input__exercise" size="8" maxLength="20"></input>
        </span>
  
        <span>
          <label htmlFor="input__sets">Sets: </label>
          <input type="text" className="input__sets" size="4" maxLength="3"></input>
        </span>
  
        <span>
          <label htmlFor="input__reps">Reps: </label>
          <input type="text" className="input__reps" size="4" maxLength="3"></input>
        </span>
  
        <span className="input__buttonSpan">
          <button onClick={handleSubmit} type="submit" className="input__button">Add</button>
        </span>
  
      </form>
    </aside>
  )
};

export default Input;
