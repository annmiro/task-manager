import './Button.styles.css';


function Button({ variant, onClick, children, size = 'medium' }) {
    return <button
        type={variant === 'submit' ? 'submit' : 'button'}
        className={`button ${variant} ${size}`}
        onClick={onClick}>
        {children}
    </button>
};

export default Button;