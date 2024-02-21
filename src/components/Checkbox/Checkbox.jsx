import { useState } from "react";
import "./Checkbox.styles.css";

function Checkbox({ checked, description, changeTaskDescription }) {
    const [isEditableMode, setIsEditableMode] = useState(false);
    const [localDescription, setEditDescription] = useState(description);

    const onCancelClick = () => {
        setIsEditableMode(false);
        setEditDescription(description);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        changeTaskDescription(localDescription)
        setIsEditableMode(false);
    }

    return (
        <>
            {isEditableMode ? (
                <form onSubmit={onSubmit}>
                    <input type="text" name='description' value={localDescription} onChange={(evt) => setEditDescription(evt.target.value)} />
                    <div>
                        <button type="submit">save</button>
                        <button type="button" onClick={onCancelClick}>cancel</button>
                    </div>
                </form>

            ) : (
                <label className="checkbox-label">
                    <input className="checkbox" type="checkbox" defaultChecked={checked} />
                    <span className="checkbox-value" onClick={() => setIsEditableMode(true)}>{description}</span>
                </label>
            )}
        </>);
};

export default Checkbox;