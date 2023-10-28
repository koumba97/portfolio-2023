import { Link } from 'react-router-dom';
import './NavButton.scss';
import { useEffect, useState } from 'react';

type ButtonType = 'menu' | 'next' | 'previous' | 'link';
interface NavButtonProp {
    type?: ButtonType;
    outlined?: boolean;
    className?: string;
    id?: string;
}
const NavButton = ({ type = 'menu', outlined = false, className = '', id = '' }: NavButtonProp) => {
    const [route, setRoute] = useState('/');
    useEffect(() => {
        setRoute(updateRoute());
    }, [type]);

    const updateRoute = () => {
        switch (type) {
            case 'menu':
                return '/';

            default:
                return '';
        }
    };

    return (
        <Link id={id} className={`nav-button ${className} ${outlined ? 'outlined' : null}`} to={route}>
            <ButtonContent type={type} />
        </Link>
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

export default NavButton;