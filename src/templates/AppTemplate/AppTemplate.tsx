import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar.tsx';
import SocialBar from '../../components/SocialBar/SocialBar.tsx';
import { ToastContainer } from 'react-toastify';

const AppTemplate = () => {
    return (
        <div className="app">
            <NavBar />
            <div className="page-content">
                <Outlet />
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <SocialBar />
        </div>
    );
};

export default AppTemplate;
