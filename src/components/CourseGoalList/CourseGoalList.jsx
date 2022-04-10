import './CourseGoalList.css';
import CourseGoalItems from '../CourseGoalItems/CourseGoalItems';

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.goalItems.map((goal) => (
        <CourseGoalItems key={goal.id} id={goal.id}>
          {goal.text}
        </CourseGoalItems>
      ))}
    </ul>
  );
};

export default CourseGoalList;
