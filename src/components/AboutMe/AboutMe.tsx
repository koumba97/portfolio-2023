import './AboutMe.scss';
import NavButton from '../ui/NavButton/NavButton';
import { useState } from 'react';

interface AboutMeProp {
    hide: Function;
}
const AboutMe = ({ hide }: AboutMeProp) => {
    const [hideContent, setHideContent] = useState(false);
    const handleButtonClick = () => {
        setHideContent(true);
        setTimeout(() => {
            hide();
        }, 500);
    };
    return (
        <section className={`about-me ${hideContent ? 'hide' : null}`}>
            <NavButton type="about" onClick={handleButtonClick} />

            <h1>about me</h1>
        </section>
    );
};

export default AboutMe;
