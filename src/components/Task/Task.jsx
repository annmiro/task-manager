import Checkbox from '../Checkbox/Checkbox';
import TaskTag from '../TaskTag/TaskTag';
import './Task.styles.css';

function Task({ checked, description, categoryName }) {
    return (
        <article className="task">
            <Checkbox checked={checked} description={description}/>
            <TaskTag status={categoryName}/>
        </article>);
};

export default Task;