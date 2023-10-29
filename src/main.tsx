import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../i18n.ts';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ProjectProvider } from './contexts/ProjectContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ProjectProvider>
                <App />
            </ProjectProvider>
        </BrowserRouter>
    </React.StrictMode>
);
