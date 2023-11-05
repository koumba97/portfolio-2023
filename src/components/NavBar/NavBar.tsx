import { useTranslation } from 'react-i18next';
import SwitchLang from '../SwitchLang/SwitchLang';
import './NavBar.scss';

const NavBar = () => {
    const { t } = useTranslation();
    return (
        <nav className="nav-bar">
            <p id="portfolio-2023">{t('PORTFOLIO_2023')}</p>
            <h3 className="brand-name">Koum.</h3>
            <SwitchLang />
        </nav>
    );
};
export default NavBar;
