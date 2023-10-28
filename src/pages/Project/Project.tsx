import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';
import Button from '../../components/ui/Button/Button';
import ButtonLink from '../../components/ui/ButtonLink/ButtonLink';
import NavButton from '../../components/ui/NavButton/NavButton';
import './Project.scss';

const Project = () => {
    return (
        <section className="project">
            <NavButton id="menu-button" />
            <ProjectCarousel />
            <div className="project-details">
                <section>
                    <NavButton id="link-button" type="link" outlined />
                    <h1 className="title">Project title</h1>
                    <p className="p-details">
                        Lorem ipsum dolor sit amet, consectetuer amet adipiscing elit. Aenean commodo ligula eget et
                        dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturien commodo.
                    </p>
                </section>

                <section>
                    <h3>Stack</h3>
                    <ul>
                        <li className="li-details">stack 1</li>
                        <li className="li-details">stack 1</li>
                        <li className="li-details">stack 1</li>
                    </ul>
                </section>

                <section>
                    <h3>Category</h3>
                    <p className="p-details">Web developement</p>
                </section>

                <section id="links-section">
                    <ButtonLink icon="las la-desktop" href="">
                        Preview project
                    </ButtonLink>
                    <ButtonLink icon="lab la-github" href="">
                        Github repo
                    </ButtonLink>
                </section>

                <div className="nav-buttons-container">
                    <NavButton outlined type="previous" />
                    <NavButton type="next" />
                </div>
            </div>
        </section>
    );
};
export default Project;
