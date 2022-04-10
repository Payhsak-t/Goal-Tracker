import './CourseGoalItems.css';

const CourseGoalItems = (props) => {
  return <li className="goal-item">{props.children}</li>;
};

export default CourseGoalItems;
