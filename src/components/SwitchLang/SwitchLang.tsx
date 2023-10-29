import { useTranslation } from 'react-i18next';
import './SwitchLang.scss';
import { useState } from 'react';

type SupportedLang = 'en' | 'fr';
const SwitchLang = () => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const [switchTo, setSwitchTo] = useState<SupportedLang>(currentLang === 'fr' ? 'en' : 'fr');

    const toogleLang = (lang: SupportedLang) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
        setSwitchTo(lang === 'fr' ? 'en' : 'fr');
        localStorage.setItem('koum-lang', lang);
    };
    return (
        <p className="switch-lang" onClick={() => toogleLang(switchTo)}>
            {switchTo}
        </p>
    );
};

export default SwitchLang;
