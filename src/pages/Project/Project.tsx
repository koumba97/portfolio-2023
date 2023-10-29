import { useParams } from 'react-router-dom';
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';
import ButtonLink from '../../components/ui/ButtonLink/ButtonLink';
import NavButton from '../../components/ui/NavButton/NavButton';
import './Project.scss';
import { useContext, useEffect, useState } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import { ProjectInterface } from '../../data/ProjectsData';

const Project = () => {
    const [project, setProject] = useState<ProjectInterface>({} as ProjectInterface);
    const [previousProject, setPreviousProject] = useState<string>();
    const [nextProject, setNextProject] = useState<string>();
    const { getProjectById } = useContext(ProjectContext);
    const { projectId } = useParams<{ projectId: string }>();

    const LAST_PROJECT_ID = '9';
    const FIRST_PROJECT_ID = '1';

    useEffect(() => {
        if (projectId) {
            const projectData = getProjectById(projectId);
            if (projectData) {
                setProject(projectData);
            }
            getPreviousProjectId();
            getNextProjectId();
        }
    }, [projectId]);

    const getPreviousProjectId = () => {
        let previousProjectId;
        if (projectId === FIRST_PROJECT_ID) {
            previousProjectId = LAST_PROJECT_ID;
        } else {
            previousProjectId = Number(projectId) - 1;
        }
        setPreviousProject(`/project/${previousProjectId}`);
    };

    const getNextProjectId = () => {
        let nextProjectId;
        if (projectId === LAST_PROJECT_ID) {
            nextProjectId = FIRST_PROJECT_ID;
        } else {
            nextProjectId = Number(projectId) + 1;
        }
        setNextProject(`/project/${nextProjectId}`);
    };

    return (
        <section className="project">
            <NavButton id="menu-button" />
            <ProjectCarousel images={project.images} />
            <div className="project-details">
                <section>
                    <NavButton id="link-button" type="link" outlined />
                    <h1 className="title">
                        {project.title} {projectId}
                    </h1>
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
                    <NavButton outlined type="previous" route={previousProject} />
                    <NavButton type="next" route={nextProject} />
                </div>
            </div>
        </section>
    );
};
export default Project;
