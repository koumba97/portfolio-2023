import { useTranslation } from 'react-i18next';
import SwitchLang from '../SwitchLang/SwitchLang';
import './NavBar.scss';

const NavBar = () => {
    const { t } = useTranslation();
    return (
        <nav className="nav-bar">
            <p>{t('PORTFOLIO-2023')}</p>
            <h3 className="brand-name">Koum.</h3>
            <SwitchLang />
        </nav>
    );
};
export default NavBar;
