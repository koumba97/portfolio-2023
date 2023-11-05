import { useEffect, useState } from 'react';
import './ProjectCarousel.scss';
import Button from '../ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface ProjectCarouselInterface {
    images: string[];
    centeredImages?: number[];
    demo?: string | null;
}
const ProjectCarousel = ({ images = [], centeredImages = [], demo = null }: ProjectCarouselInterface) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [imageCentered, setImageCentered] = useState(false);
    const [activeSlideImg, setActiveSlideImg] = useState(images[activeSlideIndex]);
    const [displayDemo, setDisplayDemo] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        setActiveSlideIndex(0);
    }, [images]);

    useEffect(() => {
        setActiveSlideImg(images[activeSlideIndex]);
        defineImagePostion();
    }, [activeSlideIndex, images]);

    const updateActiveSlide = (slideIndex: number) => {
        if (slideIndex < 0) {
            slideIndex = images.length - 1;
        } else if (slideIndex > images.length - 1) {
            slideIndex = 0;
        }
        setActiveSlideIndex(slideIndex);
        defineImagePostion();
    };

    const defineImagePostion = () => {
        const isCentered = centeredImages.find((image) => image === activeSlideIndex);
        setImageCentered(isCentered !== undefined ? true : false);
    };

    const openDemo = () => {
        setDisplayDemo(true);
    };

    const closeDemo = () => {
        setDisplayDemo(false);
    };

    return (
        <>
            <div className="project-carousel">
                <div
                    className="active-slide"
                    style={{
                        backgroundImage: `url(${activeSlideImg})`,
                        backgroundPosition: `${imageCentered ? 'center' : 'unset'}`,
                    }}
                >
                    {demo ? (
                        <Button className="demo-button" icon="las la-play" size="small" onClick={openDemo}>
                            {t('WATCH_DEMO')}
                        </Button>
                    ) : null}
                    <div className="control-container">
                        <button className="slide-control-btn" onClick={() => updateActiveSlide(activeSlideIndex - 1)}>
                            <i className="las la-angle-left"></i>
                        </button>
                        <button className="slide-control-btn" onClick={() => updateActiveSlide(activeSlideIndex + 1)}>
                            <i className="las la-angle-right"></i>
                        </button>
                    </div>
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

            {displayDemo && demo ? (
                <div className="demo-container" onClick={closeDemo}>
                    <video controls>
                        <source src={demo} type="video/mp4" />
                    </video>
                </div>
            ) : null}
        </>
    );
};

export default ProjectCarousel;
