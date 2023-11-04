import './Home.scss';
import ProjectsGrid from '../../components/ProjectsGrid/ProjectGrid';
import NavButton from '../../components/ui/NavButton/NavButton';
import AboutMe from '../../components/AboutMe/AboutMe';
import { useState } from 'react';

const Home = () => {
    const [aboutMeVisibility, setAboutMeVisibility] = useState(false);
    const showAboutMe = () => {
        setAboutMeVisibility(true);
    };
    const hideAboutMe = () => {
        setAboutMeVisibility(false);
    };
    return (
        <section className="home">
            {aboutMeVisibility ? null : (
                <NavButton className="about-button" type="about" onClick={showAboutMe}></NavButton>
            )}
            {aboutMeVisibility ? <AboutMe hide={hideAboutMe} /> : null}
            <ProjectsGrid />
        </section>
    );
};
export default Home;
