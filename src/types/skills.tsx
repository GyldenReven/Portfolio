import javascriptIcon from "../assets/icons/javascript.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import reactIcon from "../assets/icons/react.svg";
import dartIcon from "../assets/icons/dart.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import flutterIcon from "../assets/icons/flutter.svg";
import pythonIcon from "../assets/icons/python.svg";
import luaIcon from "../assets/icons/lua.svg";
import gitIcon from "../assets/icons/git.svg";
import vscodeIcon from "../assets/icons/vscode.svg";

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
