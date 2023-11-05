import { useParams } from 'react-router-dom';
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';
import ButtonLink from '../../components/ui/ButtonLink/ButtonLink';
import NavButton from '../../components/ui/NavButton/NavButton';
import './Project.scss';
import { useContext, useEffect, useState } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import { ProjectInterface } from '../../types/ProjectInterface';
import { useTranslation } from 'react-i18next';

const Project = () => {
    const [project, setProject] = useState<ProjectInterface>({} as ProjectInterface);
    const [previousProject, setPreviousProject] = useState<string>();
    const [nextProject, setNextProject] = useState<string>();
    const { getProjectById } = useContext(ProjectContext);
    const { projectId } = useParams<{ projectId: string }>();
    const { t } = useTranslation();

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
            <ProjectCarousel
                images={project.images}
                centeredImages={project.centeredImages}
                demo={project.demo ? project.demo : null}
            />
            <div className="project-details">
                <section>
                    <NavButton id="link-button" type="link" outlined link={window.location.href} />
                    <h1 className="title">{project.title}</h1>
                    <div className="description" dangerouslySetInnerHTML={{ __html: t(project.description) }} />
                </section>

                <section>
                    <h3>{t('STACK')}</h3>
                    <ul className="stack-list">
                        {project.stack
                            ? project.stack.map((stack) => (
                                  <li key={`stack-${stack.name}`}>
                                      <div
                                          className="stack-logo"
                                          style={{ backgroundImage: `url(${stack.image})` }}
                                      ></div>
                                      {t(stack.name)}
                                  </li>
                              ))
                            : null}
                    </ul>
                </section>

                <section>
                    <h3>{t('CATEGORY')}</h3>
                    <p className="p-details">
                        {project.category
                            ? project.category.map((category, index) => (index > 0 ? `, ${t(category)}` : t(category)))
                            : null}
                    </p>
                </section>

                <section id="links-section">
                    {project.project_link ? (
                        <ButtonLink icon="las la-link" href={project.project_link}>
                            {t('SEE_PROJECT_ONLINE')}
                        </ButtonLink>
                    ) : null}
                    {project.github_link ? (
                        <ButtonLink icon="lab la-github" href={project.github_link}>
                            {t('GITHUB_REPO')}
                        </ButtonLink>
                    ) : null}
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
