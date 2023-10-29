import { useEffect, useState } from 'react';
import './ProjectCarousel.scss';

interface ProjectCarouselInterface {
    images: string[];
}
const ProjectCarousel = ({ images = [] }: ProjectCarouselInterface) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [activeSlideImg, setActiveSlideImg] = useState(images[activeSlideIndex]);

    useEffect(() => {
        setActiveSlideImg(images[activeSlideIndex]);
    }, [activeSlideIndex, images]);

    const updateActiveSlide = (slideIndex: number) => {
        if (slideIndex < 0) {
            slideIndex = images.length - 1;
        } else if (slideIndex > images.length - 1) {
            slideIndex = 0;
        }
        setActiveSlideIndex(slideIndex);
    };

    return (
        <div className="project-carousel">
            <div className="active-slide" style={{ backgroundImage: `url(${activeSlideImg})` }}>
                <button className="slide-control-btn" onClick={() => updateActiveSlide(activeSlideIndex - 1)}>
                    <i className="las la-angle-left"></i>
                </button>
                <button className="slide-control-btn" onClick={() => updateActiveSlide(activeSlideIndex + 1)}>
                    <i className="las la-angle-right"></i>
                </button>
            </div>
            <div className="slides-container">
                {images.map((image, index) => (
                    <div
                        className={`slide-wrapper ${index === activeSlideIndex ? 'active' : ''}`}
                        key={`slide-${index}`}
                    >
                        <div
                            className="slide"
                            style={{ backgroundImage: `url(${image})` }}
                            onClick={() => updateActiveSlide(index)}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCarousel;
