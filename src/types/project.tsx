import type { Tag } from "./tag";
import testImg from "../assets/icons/react.svg";
import utiliteaThumb from "../assets/projects/thumbnails/utilitea_thumbnail.png";
import utiliteaIcon from "../assets/projects/icons/utilitea_icon.png";
import { defaultTags } from "../types/tag";

export type Project = {
    title: string;
    description: string;
    thumbnail: string;
    icon?: string;
    tags: Tag[];
    githubUrl?: string;
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        title: "Ametask",
        description: "ametask_description",
        thumbnail: testImg,
        icon: testImg,
        tags: [defaultTags[9], defaultTags[10], defaultTags[12],],
        githubUrl: "https://github.com/GyldenReven/Ametask",
    },
    {
        title: "UtiliTea",
        description: "utilitea_description",
        thumbnail: utiliteaThumb,
        icon: utiliteaIcon,
        tags: [defaultTags[0], defaultTags[1], defaultTags[2], defaultTags[3]],
        githubUrl: "https://github.com/GyldenReven/UtiliTea",
        liveUrl: "https://gyldenreven.github.io/UtiliTea/",
    },
    {
        title: "Project 1",
        description: "Description for project 1",
        thumbnail: testImg,
        icon: testImg,
        tags: [defaultTags[2], defaultTags[6]],
    },
    {
        title: "Project 2",
        description: "Description for project 2",
        thumbnail: testImg,
        tags: [defaultTags[1], defaultTags[6]],
    },
    {
        title: "Project 3",
        description: "Description for project 3",
        thumbnail: testImg,
        tags: [defaultTags[0], defaultTags[8]],
    },
    {
        title: "Project 4",
        description: "Description for project 4",
        thumbnail: testImg,
        tags: [defaultTags[3], defaultTags[7]],
    },
];
