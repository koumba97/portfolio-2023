import { Link } from 'react-router-dom';
import './ProjectsGrid.scss';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsGrid = () => {
    const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="projects-grid">
            {projects.map((project, i) => {
                return (
                    <Link to={`project/${i}`}>
                        <ProjectCard>{project}</ProjectCard>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProjectsGrid;
