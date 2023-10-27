import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar.tsx';
import SocialBar from '../../components/SocialBar/SocialBar.tsx';

const AppTemplate = () => {
    return (
        <div className="app">
            <NavBar />
            <div className="page-content">
                <Outlet />
            </div>
            <SocialBar />
        </div>
    );
};

export default AppTemplate;
