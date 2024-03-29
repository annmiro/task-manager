import "./Checkbox.styles.css";

function Checkbox({ checked, description }) {
    return (
        <label className="checkbox-label">
            <input className="checkbox" type="checkbox" defaultChecked={checked} />
            <span className="checkbox-value">{description}</span>
        </label>);
};

export default Checkbox;