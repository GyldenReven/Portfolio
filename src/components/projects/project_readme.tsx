import Markdown from "react-markdown";
import axios from "axios";
import { useEffect, useState } from "react";

function ProjectReadMe() {
    const [rawMd, setRawMd] = useState("");
    
        useEffect(() => {
            axios
                .get(
                    "https://raw.githubusercontent.com/GyldenReven/Ametask/main/README.md"
                )
                .then((response) => setRawMd(response.data))
                .catch(() => "Could not load markdown content.");
        }, []);

    return (
        <div>
            <h2>Project README</h2>
            <Markdown>{rawMd}</Markdown>
            
        </div>
    );
}

export default ProjectReadMe;