import React from "react";
import HeaderElement from "./header_element";

const Header: React.FC = () => {
    return (
        <header className="bg-ctp-surface0 p-4 flex justify-between items-center rounded-b-xl shadow-lg">
            <h1>My Portfolio</h1>
            <menu className="flex gap-4">
                <HeaderElement name="Home" ref="/" />
                <HeaderElement name="Projects" ref="/projects" />
                <HeaderElement name="Contact" ref="/contact" />
            </menu>
        </header>
    );
};

export default Header;
