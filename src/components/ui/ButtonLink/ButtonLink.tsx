import './ButtonLink.scss';

interface IProp {
    children: any;
    icon?: any;
    href: string;
}

const ButtonLink = ({ children, icon, href }: IProp) => {
    return (
        <a className="button-link" href={href} target="_blank">
            <p className="link-content">
                {icon ? <i className={`${icon} icon`}></i> : null}
                {children}
            </p>
        </a>
    );
};

export default ButtonLink;
