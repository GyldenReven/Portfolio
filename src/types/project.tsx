import type { Tag } from "./tag";

export type Project = {
    title: string;
    description: string;
    thumbnail: string;
    icon?: string;
    tags: Tag[];
};