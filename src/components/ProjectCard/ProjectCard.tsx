import './ProjectCard.scss';

interface ProjectCardInterface {
    children: any;
}
const ProjectCard = ({ children }: ProjectCardInterface) => {
    return <div className="project-card">{children}</div>;
};

export default ProjectCard;
