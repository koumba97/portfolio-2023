import { Link } from 'react-router-dom';
import './ProjectsGrid.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useContext } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';

const ProjectsGrid = () => {
    const { projects } = useContext(ProjectContext);

    return (
        <div className="projects-grid">
            {projects.map((project, i) => {
                return (
                    <Link to={`project/${i}`} key={`project-${i}`}>
                        <ProjectCard project={project}></ProjectCard>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProjectsGrid;
