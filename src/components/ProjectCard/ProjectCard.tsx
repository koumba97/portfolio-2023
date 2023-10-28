import './ProjectCard.scss';

interface ProjectCardProp {
    children: any;
}
const ProjectCard = ({ children }: ProjectCardProp) => {
    return (
        <div className="project-card">
            <p>{children}</p>
        </div>
    );
};

export default ProjectCard;
