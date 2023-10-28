import './ProjectCarousel.scss';
const ProjectCarousel = () => {
    return (
        <div className="project-carousel">
            <div className="active-slide"></div>
            <div className="slides-container">
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
            </div>
        </div>
    );
};

export default ProjectCarousel;
