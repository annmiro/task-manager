import "./Checkbox.styles.css";

function Checkbox({ checked, description, editTaskDescription, toggleTaskStatus }) {
    return (
        <div className="checkbox-label">
            <input className="checkbox" type="checkbox" checked={checked} onChange={(e) => toggleTaskStatus(e.target.checked)} />
            <span className="checkbox-value" onClick={editTaskDescription}>{description}</span>
        </div>
    )
}

export default Checkbox;