import './Button.scss';

interface IProp {
    children: any;
    type?: 'button' | 'submit' | 'reset';
    outlined?: boolean;
    color?: string;
    icon?: any;
    disabled?: boolean;
    size?: 'default' | 'small';
    className?: string;
    link?: string;
    onClick?: Function;
}

const Button = ({
    children,
    type = 'button',
    color = 'primary',
    icon,
    onClick,
    disabled = false,
    className,
    size = 'default',
    outlined = false,
    link = undefined,
}: IProp) => {
    const handleClick = () => {
        if (onClick && !disabled) onClick();
    };

    return (
        <>
            {link ? (
                <a href={link} target="_blank">
                    <ButtonContent
                        color={color}
                        className={className}
                        size={size}
                        outlined={outlined}
                        type={type}
                        disabled={disabled}
                        icon={icon}
                        onClick={onClick}
                        children={children}
                    />
                </a>
            ) : (
                <ButtonContent
                    color={color}
                    className={className}
                    size={size}
                    outlined={outlined}
                    type={type}
                    disabled={disabled}
                    icon={icon}
                    onClick={onClick}
                    children={children}
                />
            )}
        </>
    );
};

const ButtonContent = ({ color, className, size, outlined, type, disabled, icon, onClick, children }: IProp) => {
    const handleClick = () => {
        if (onClick && !disabled) onClick();
    };

    return (
        <button
            className={`${color} ${className} ${size} button ${outlined ? 'outlined' : ''}`}
            type={type}
            onClick={handleClick}
            disabled={disabled}
        >
            <p className="button-content">
                {icon ? <i className={`${icon} icon`}></i> : null}
                {children}
            </p>
        </button>
    );
};
export default Button;
