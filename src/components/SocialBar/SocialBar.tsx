import './SocialBar.scss';

const SocialBar = () => {
    return (
        <div className="social-bar">
            <div className="social-links">
                <a href="https://github.com/koumba97" target="_blank">
                    <i className="lab la-github"></i>
                </a>
                <a href="https://www.instagram.com/koum.97/" target="_blank">
                    <i className="lab la-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/koumba-keita-8635b9137/" target="_blank">
                    <i className="lab la-linkedin-in"></i>
                </a>
                <a href="https://www.behance.net/koumbakeita" target="_blank">
                    <i className="lab la-behance"></i>
                </a>
                <a href="https://dribbble.com/Kouum" target="_blank">
                    <i className="lab la-dribbble"></i>
                </a>
            </div>
        </div>
    );
};
export default SocialBar;
