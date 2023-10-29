import { Link } from 'react-router-dom';
import './ProjectsGrid.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useContext } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';

const ProjectsGrid = () => {
    const { projects } = useContext(ProjectContext);

    return (
        <div className="projects-grid">
            {projects.map((project) => {
                return (
                    <Link to={`project/${project.id}`} key={`project-${project.id}`}>
                        <ProjectCard project={project}></ProjectCard>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProjectsGrid;
