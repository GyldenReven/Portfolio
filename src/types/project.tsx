import type { Tag } from "./tag";
import utiliteaThumb from "../assets/projects/thumbnails/utilitea_thumbnail.png";
import utiliteaIcon from "../assets/projects/icons/utilitea_icon.png";
import ametaskThumb from "../assets/projects/thumbnails/ametask_thumbnail.jpg";
import ametaskIcon from "../assets/projects/icons/ametask_icon.png";
import lensymphonyThumb from "../assets/projects/thumbnails/lensymphony_thumbnail.png";
import lensymphonyIcon from "../assets/projects/icons/lensymphony_icon.png";
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
        description: "projects.ametask_description",
        thumbnail: ametaskThumb,
        icon: ametaskIcon,
        tags: [defaultTags[9], defaultTags[10], defaultTags[12], defaultTags[13],],
        githubUrl: "https://github.com/GyldenReven/Ametask",
    },
    {
        title: "UtiliTea",
        description: "projects.utilitea_description",
        thumbnail: utiliteaThumb,
        icon: utiliteaIcon,
        tags: [defaultTags[0], defaultTags[1], defaultTags[2], defaultTags[3]],
        githubUrl: "https://github.com/GyldenReven/UtiliTea",
        liveUrl: "https://gyldenreven.github.io/UtiliTea/",
    },
    {
        title: "LenSymphony",
        description: "projects.lensymphony_description",
        thumbnail: lensymphonyThumb,
        icon: lensymphonyIcon,
        tags: [defaultTags[14], defaultTags[15],],
        githubUrl: "https://github.com/GyldenReven/LenSymphony",
    },
    {
        title: "Portfolio",
        description: "projects.portfolio_description",
        thumbnail: "",
        tags: [defaultTags[3], defaultTags[4], defaultTags[5], defaultTags[6], defaultTags[7],],
        githubUrl: "https://github.com/GyldenReven/Portfolio",
    },
];
