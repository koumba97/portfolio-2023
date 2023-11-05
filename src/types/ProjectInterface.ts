import { Category } from './Category';
import { Stack } from './Stack';

export interface ProjectInterface {
    id: string;
    title: string;
    category: Category[];
    description: string;
    stack: Stack[];
    coverImage: string;
    images: string[];
    demo?: string;
    project_link?: string;
    github_link?: string;
}
