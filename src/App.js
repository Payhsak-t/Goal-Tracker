import CourseGoalInput from './components/CourseGoalInput/CourseGoalInput';
import CourseGoalList from './components/CourseGoalList/CourseGoalList';
import { useState } from 'react';

import './App.css';

const App = () => {
  const [goals, setGoals] = useState([
    { text: 'Submit resume', id: 'g1' },
    { text: 'Search for job', id: 'g2' },
  ]);

  const addNewGoalHandler = (enteredGoal) => {
    setGoals((previousGoals) => {
      const updatedGoals = [...previousGoals];
      updatedGoals.unshift({ text: enteredGoal, id: Math.random().toString() });
      console.log(updatedGoals);
      return updatedGoals;
    });
  };

  const deleteGoalHandler = (deletedGoal) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== deletedGoal);
      console.log(updatedGoals);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (goals.length > 0) {
    content = (
      <CourseGoalList goalItems={goals} onDeleteItem={deleteGoalHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseGoalInput onAddGoal={addNewGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
