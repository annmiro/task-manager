import Checkbox from '../Checkbox/Checkbox';
import TaskTag from '../TaskTag/TaskTag';
import './Task.styles.css';

function Task({ checked, description, categoryName, changeTaskDescription, toggleTaskStatus }) {
    return (
        <article className="task">
            <Checkbox checked={checked} description={description} changeTaskDescription={changeTaskDescription} toggleTaskStatus={toggleTaskStatus} />
            <TaskTag status={categoryName} />
        </article>);
};

export default Task;