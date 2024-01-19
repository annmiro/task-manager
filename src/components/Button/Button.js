import './Button.styles.css';


function Button({ variant, children }) {
    return <button type='button' className={`button ${variant}`}>{children}</button>
};

export default Button;