export type Tag = {
    name: string;
    color: string; // Hex color code, e.g., '#FF5733'
};

export const defaultTags: Tag[] = [
    { name: 'javascript', color: '#f7df1e' },
    { name: 'typescript', color: '#3178c6' },
    { name: 'react', color: '#61dafb' },
    { name: 'css', color: '#264de4' },
    { name: 'html', color: '#e34c26' },
    { name: 'nodejs', color: '#68a063' },
    { name: 'web', color: '#ff6f61' },
    { name: 'design', color: '#9b59b6' },
    { name: 'portfolio', color: '#2ecc71' },
    { name: 'dart', color: '#e67e22' },
];