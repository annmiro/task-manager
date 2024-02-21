import Checkbox from '../Checkbox/Checkbox';
import TaskTag from '../TaskTag/TaskTag';
import './Task.styles.css';

function Task({ checked, description, categoryName, changeTaskDescription }) {
    return (
        <article className="task">
            <Checkbox checked={checked} description={description} changeTaskDescription={changeTaskDescription} />
            <TaskTag status={categoryName}/>
        </article>);
};

export default Task;