import './Home.scss';
import ProjectsGrid from '../../components/ProjectsGrid/ProjectGrid';
import NavButton from '../../components/ui/NavButton/NavButton';

const Home = () => {
    return (
        <section className="home">
            <NavButton className="about-button" type="about"></NavButton>
            <ProjectsGrid />
        </section>
    );
};
export default Home;
