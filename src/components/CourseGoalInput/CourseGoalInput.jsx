import { useState } from 'react';
import './CourseGoalInput.css';

const CourseGoalInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputHandler} />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default CourseGoalInput;
