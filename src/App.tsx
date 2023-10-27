import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import AppTemplate from './templates/AppTemplate/AppTemplate';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppTemplate />}>
                <Route index element={<Home />} />
                <Route path="/project/:id" element={<Project />} />
            </Route>
        </Routes>
    );
};

export default App;
