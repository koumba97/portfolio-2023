import { createContext, useState } from 'react';
import { ProjectsData } from '../data/ProjectsData';
import { ProjectInterface } from '../types/ProjectInterface';

export const ProjectContext = createContext({
    projects: [] as ProjectInterface[],
    getProjectById: (_projectId: string): ProjectInterface | null => {
        return null;
    },
});

interface ProjectProviderInterface {
    children: any;
}

export const ProjectProvider = ({ children }: ProjectProviderInterface) => {
    const [projects, _setProjects] = useState(ProjectsData);

    const getProjectById = (projectId: string): ProjectInterface | null => {
        const result = projects.find((project) => project.id === projectId);
        return result ? result : null;
    };
    const value = { projects, getProjectById };
    return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};
