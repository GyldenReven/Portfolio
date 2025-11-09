import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import axios from "axios";
import { useEffect, useState } from "react";

function ProjectReadMe({ projectName }: { projectName: string }) {
    const [rawMd, setRawMd] = useState("");
    
        useEffect(() => {
            axios
                .get(
                    "https://raw.githubusercontent.com/GyldenReven/" + projectName + "/main/README.md"
                )
                .then((response) => setRawMd(response.data))
                .catch(() => "Could not load markdown content.");
        }, []);

    return (
        <div className="readme-container">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{rawMd}</ReactMarkdown>     
        </div>
    );
}

export default ProjectReadMe;