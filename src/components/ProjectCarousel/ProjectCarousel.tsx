import { useEffect, useState } from 'react';
import './ProjectCarousel.scss';
const ProjectCarousel = () => {
    const image1 =
        'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/illustration%2Fsunday.JPG?alt=media&token=8687156a-bf79-4513-8838-bd3c4e5afbbc&_gl=1*bvfnvx*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUxODQwMS4zOS4xLjE2OTg1MTg3NjQuNjAuMC4w';
    const image2 =
        'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/illustration%2Fgood-days.PNG?alt=media&token=441f6c67-d1f5-4969-8fde-37af055c7120&_gl=1*107pdhd*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUxODQwMS4zOS4xLjE2OTg1MTg4NDguNjAuMC4w';
    const image3 =
        'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/illustration%2Fblack-swan.JPG?alt=media&token=a8808513-e24a-4878-bce6-afb0b46a3af3&_gl=1*9gxzp1*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUxODQwMS4zOS4xLjE2OTg1MTg3OTQuMzAuMC4w';
    const image4 =
        'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/illustration%2Fcry-baby.gif?alt=media&token=0f34c26d-5934-48b0-9b63-ad04f7d51688&_gl=1*9hdw2r*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUxODQwMS4zOS4xLjE2OTg1MTg3ODIuNDIuMC4w';
    const images = [image1, image2, image3, image4];

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
