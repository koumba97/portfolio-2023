import { Link } from 'react-router-dom';
import './NavButton.scss';
import { useEffect, useState } from 'react';
interface NavButtonProp {
    type?: 'menu' | 'next' | 'previous';
    outlined?: boolean;
    className?: string;
}
const NavButton = ({ type = 'menu', outlined = false, className = '' }: NavButtonProp) => {
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
        <Link className={`nav-button ${className} ${outlined ? 'outlined' : null}`} to={route}>
            {type === 'menu' ? <MenuButton /> : type === 'next' ? <NextButton /> : <PreviousButton />}
        </Link>
    );
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

export default NavButton;
