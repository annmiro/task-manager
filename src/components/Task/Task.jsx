import { useState } from "react";
import Checkbox from '../Checkbox/Checkbox';
import TaskTag from '../TaskTag/TaskTag';
import TaskForm from '../TaskForm/TaskForm';
import './Task.styles.css';

function Task({ checked, description, categoryName, changeTaskDescription, toggleTaskStatus }) {
    const [isEditableMode, setIsEditableMode] = useState(false);
    const [localDescription, setEditDescription] = useState(description);

    const onCancel = () => {
        setIsEditableMode(false);
        setEditDescription(description);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        changeTaskDescription(localDescription)
        setIsEditableMode(false);
    }

    return (
        <article className="task">
            {isEditableMode
                ? <TaskForm onSubmit={onSubmit} onCancel={onCancel} description={localDescription} changeDescription={setEditDescription} />
                : <Checkbox checked={checked} description={localDescription} editTaskDescription={() => setIsEditableMode(true)} toggleTaskStatus={toggleTaskStatus} />}
            <TaskTag status={categoryName} />
        </article>);
};

export default Task;