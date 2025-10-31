import { Children } from "react";

const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ol className="relative border-s border-ctp-overlay0 ml-2 mt-6">
            {Children.map(children, (child) => (
                <li>{child}</li>
            ))}
        </ol>
    );
};

export default Timeline;
