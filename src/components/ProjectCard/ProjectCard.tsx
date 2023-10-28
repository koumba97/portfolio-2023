import './ProjectCard.scss';

interface ProjectCardProp {}
const ProjectCard = ({}: ProjectCardProp) => {
    const bgImage = 'https://www.echollywell.co.uk/wp-content/uploads/blank-00cc00_040004000.png';
    return (
        <div className="project-card">
            <p className="project-title">Project's title</p>
            <div className="project-card-content" style={{ backgroundImage: `url(${bgImage})` }}></div>
        </div>
    );
};

export default ProjectCard;
