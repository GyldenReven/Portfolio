import type { Tag } from "./tag";
import img from "../assets/react.svg"
import { defaultTags } from "../types/tag"

export type Project = {
    title: string;
    description: string;
    thumbnail: string;
    icon?: string;
    tags: Tag[];
};

export const projects: Project[] = [
    {
        title: "Project 1",
        description: "Description for project 1",
        thumbnail: img,
        icon: img,
        tags: [defaultTags[2], defaultTags[6]]
    },
    {
        title: "Project 2",
        description: "Description for project 2",
        thumbnail: img,
        tags: [defaultTags[1], defaultTags[6]]
    },
    {
        title: "Project 3",
        description: "Description for project 3",
        thumbnail: img,
        tags: [defaultTags[0], defaultTags[8]]
    },
    {
        title: "Project 4",
        description: "Description for project 4",
        thumbnail: img,
        tags: [defaultTags[3], defaultTags[7]]
    }
];