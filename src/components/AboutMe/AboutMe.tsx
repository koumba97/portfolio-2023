import './AboutMe.scss';
import NavButton from '../ui/NavButton/NavButton';
import { useState } from 'react';
import Button from '../ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface AboutMeProp {
    hide: Function;
}
const AboutMe = ({ hide }: AboutMeProp) => {
    const { t } = useTranslation();
    const [hideContent, setHideContent] = useState(false);
    const handleButtonClick = () => {
        setHideContent(true);
        setTimeout(() => {
            hide();
        }, 500);
    };
    return (
        <>
            <section className={`about-me ${hideContent ? 'hide' : null}`}>
                <NavButton type={hideContent ? 'about' : 'close'} onClick={handleButtonClick} />
                <div className="content">
                    <div className="about-me-picture"></div>
                    <div className="description">
                        <h1 dangerouslySetInnerHTML={{ __html: t('ABOUT_ME_INTRO') }} />
                        <div className="about-me-text" dangerouslySetInnerHTML={{ __html: t('ABOUT_ME_CONTENT') }} />
                        <div className="buttons-container">
                            <Button icon="" link={t('RESUME_LINK')}>
                                {t('MY_RESUME')}
                            </Button>
                            <Button
                                outlined
                                icon="lab la-linkedin-in"
                                link="https://www.linkedin.com/in/koumba-keita-8635b9137/"
                            >
                                LinkedIn
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="about-me-bg" onClick={handleButtonClick}></div>
        </>
    );
};

export default AboutMe;
