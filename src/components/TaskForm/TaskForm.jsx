import Button from "../Button/Button";
import './TaskForm.styles.css';

function TaskForm({ onSubmit, onCancel, description, changeDescription }) {
    return (
        <form className="task-form" onSubmit={onSubmit}>
            <textarea className="task-form-field" type="text" name='description' onChange={(evt) => changeDescription(evt.target.value)} value={description} />

            <div className="task-form-buttons-wrapper">
                <Button variant='submit' size='large'>Save</Button>
                <Button variant='text' size='large' onClick={onCancel}>Cancel</Button>
            </div>
        </form>
    )
}

export default TaskForm;