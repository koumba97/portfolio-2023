import './Button.scss';

interface IProp {
    children: any;
    type?: 'button' | 'submit' | 'reset';
    color?: string;
    icon?: any;
    disabled?: boolean;
    onClick?: Function;
}

const Button = ({ children, type = 'button', color = 'primary', icon, onClick, disabled = false }: IProp) => {
    const handleClick = () => {
        if (onClick && !disabled) onClick();
    };
    return (
        <button className={`${color} button`} type={type} onClick={handleClick} disabled={disabled}>
            <p className="button-content">
                {icon ? <i className={`${icon} icon`}></i> : null}
                {children}
            </p>
        </button>
    );
};

export default Button;
