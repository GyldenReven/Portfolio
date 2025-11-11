import type React from "react";
import cog from "../../assets/gear.svg";

const Cog: React.FC<{ position: string}> = ({ position }) => {
    return (
        <img
            src={cog}
            alt="Cogwheel"
            className={`absolute w-16 h-16 ${position} hover:rotate-360 transition-all duration-1000`}
        />
    );
};

export default Cog;
