import { Children } from "react";

const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ol className="relative border-s border-ctp-surface2 ml-2">
            {Children.map(children, (child) => (
                <li>{child}</li>
            ))}
        </ol>
    );
};

export default Timeline;
