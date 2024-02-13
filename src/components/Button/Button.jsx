import './Button.styles.css';


function Button({ variant, onClick, children }) {
    return <button
        type={variant === 'submit' ? 'submit' : 'button'}
        className={`button ${variant}`}
        onClick={onClick}>
        {children}
    </button>
};

export default Button;