import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import AppTemplate from './templates/AppTemplate/AppTemplate';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        if (localStorage.getItem('koum-lang') === null) {
            localStorage.setItem('koum-lang', 'en');
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<AppTemplate />}>
                <Route index element={<Home />} />
                <Route path="/project/:projectId" element={<Project />} />
            </Route>
        </Routes>
    );
};

export default App;
