import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';
import './Project.scss';

const Project = () => {
    return (
        <section className="project">
            <ProjectCarousel />
            <div className="project-details">
                <section>
                    <h1 className="title">Project title</h1>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetuer amet adipiscing elit. Aenean commodo ligula eget et
                        dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturien commodo.
                    </p>
                </section>

                <section>
                    <h3>Stack</h3>
                    <ul>
                        <li>stack 1</li>
                        <li>stack 1</li>
                        <li>stack 1</li>
                    </ul>
                </section>

                <section>
                    <h3>Category</h3>
                    <p>Web developement</p>
                </section>

                <section>
                    <h3>Preview</h3>
                    <a href="">preview link</a>
                </section>

                <section>
                    <h3>Github</h3>
                    <a href="">github link</a>
                </section>
            </div>
        </section>
    );
};
export default Project;
