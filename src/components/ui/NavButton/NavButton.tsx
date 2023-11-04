import { Link } from 'react-router-dom';
import './NavButton.scss';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

type ButtonType = 'menu' | 'next' | 'previous' | 'link' | 'about';
interface NavButtonProp {
    type?: ButtonType;
    route?: string;
    outlined?: boolean;
    className?: string;
    onClick?: Function;
    id?: string;
    link?: string;
}
const NavButton = ({
    type = 'menu',
    route = '/',
    outlined = false,
    className = '',
    id = '',
    link = '',
    onClick,
}: NavButtonProp) => {
    const { t } = useTranslation();

    const copyLink = () => {
        navigator.clipboard.writeText(link);
        toast(t('LINK_COPIED'));
    };
    const handleButtonClick = () => {
        switch (type) {
            case 'link':
                copyLink();
                break;

            default:
                if (onClick) {
                    onClick();
                }
                break;
        }
    };

    return (
        <>
            {type !== 'link' && type !== 'about' ? (
                <Link id={id} className={`nav-button ${className} ${outlined ? 'outlined' : null}`} to={route}>
                    <ButtonContent type={type} />
                </Link>
            ) : (
                <button
                    id={id}
                    className={`nav-button ${className} ${outlined ? 'outlined' : null}`}
                    onClick={handleButtonClick}
                >
                    <ButtonContent type={type} />
                </button>
            )}
        </>
    );
};

interface ButtonContentProp {
    type: ButtonType;
}
const ButtonContent = ({ type }: ButtonContentProp) => {
    switch (type) {
        case 'menu':
            return <MenuButton />;

        case 'previous':
            return <PreviousButton />;

        case 'next':
            return <NextButton />;

        case 'link':
            return <LinkButton />;

        case 'about':
            return <AboutButton />;

        default:
            return <MenuButton />;
    }
};

const MenuButton = () => {
    return (
        <div className="menu-icon">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
        </div>
    );
};

const NextButton = () => {
    return <i className="las la-angle-right"></i>;
};

const PreviousButton = () => {
    return <i className="las la-angle-left"></i>;
};

const LinkButton = () => {
    return <i className="las la-link"></i>;
};

const AboutButton = () => {
    return <i className="las la-user"></i>;
};

export default NavButton;
