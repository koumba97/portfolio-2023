import { ProjectInterface } from '../../types/ProjectInterface';
import './ProjectCard.scss';

interface ProjectCardProp {
    project: ProjectInterface;
}
const ProjectCard = ({ project }: ProjectCardProp) => {
    return (
        <div className="project-card">
            <p className="project-title">{project.title}</p>
            <div className="project-card-content" style={{ backgroundImage: `url(${project.coverImage})` }}></div>
        </div>
    );
};

export default ProjectCard;
