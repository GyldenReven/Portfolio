import javascriptIcon from "../assets/icons/skills/javascript.svg";
import typescriptIcon from "../assets/icons/skills/typescript.svg";
import reactIcon from "../assets/icons/skills/react.svg";
import dartIcon from "../assets/icons/skills/dart.svg";
import htmlIcon from "../assets/icons/skills/html.svg";
import cssIcon from "../assets/icons/skills/css.svg";
import nodejsIcon from "../assets/icons/skills/nodejs.svg";
import flutterIcon from "../assets/icons/skills/flutter.svg";
import pythonIcon from "../assets/icons/skills/python.svg";
import luaIcon from "../assets/icons/skills/lua.svg";
import gitIcon from "../assets/icons/skills/git.svg";
import vscodeIcon from "../assets/icons/skills/vscode.svg";

export type skill = {
    name: string;
    icon: string; // Icon name, e.g., 'javascript'
};

export const languagesSkills: skill[] = [
    { name: "Python", icon: pythonIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "React", icon: reactIcon },
    { name: "Dart", icon: dartIcon },
    { name: "Flutter", icon: flutterIcon },
    { name: "Lua", icon: luaIcon },
];

export const toolsSkills: skill[] = [
    { name: "Git", icon: gitIcon },
    { name: "VS Code", icon: vscodeIcon },
];
