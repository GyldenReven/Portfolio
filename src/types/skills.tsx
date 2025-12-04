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
import javaIcon from "../assets/icons/skills/java.svg";
import sqliteIcon from "../assets/icons/skills/sqlite.svg";
import postgresqlIcon from "../assets/icons/skills/postgresql.svg";
import tailwindcssIcon from "../assets/icons/skills/tailwind.svg";
import eclipseIcon from "../assets/icons/skills/eclipse.svg";
import intelliJIcon from "../assets/icons/skills/intellij.svg";
import phpstormIcon from "../assets/icons/skills/phpstorm.svg";
import phpIcon from "../assets/icons/skills/php.svg";

export type skill = {
    name: string;
    icon: string; // Icon name, e.g., 'javascript'
};

export const languagesSkills: skill[] = [
    { name: "Java", icon: javaIcon },
    { name: "Python", icon: pythonIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Dart", icon: dartIcon },
    { name: "Lua", icon: luaIcon },
    { name: "PHP", icon: phpIcon },
];

export const frameworksSkills: skill[] = [
    { name: "Tailwind CSS", icon: tailwindcssIcon },
    { name: "Flutter", icon: flutterIcon },
]

export const databasesSkills: skill[] = [
    { name: "SQLite", icon: sqliteIcon },
    { name: "PostgreSQL", icon: postgresqlIcon },
];

export const toolsSkills: skill[] = [
    { name: "Git", icon: gitIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "Eclipse IDE", icon: eclipseIcon },
    { name: "IntelliJ Idea", icon: intelliJIcon},
    { name: "PHPStorm", icon: phpstormIcon},
];
