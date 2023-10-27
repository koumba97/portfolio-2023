import './ProjectsGrid.scss';

const ProjectsGrid = () => {
    const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="projects-grid">
            {projects.map((project) => {
                return <div className="project-card">{project}</div>;
            })}
        </div>
    );
};

export default ProjectsGrid;
