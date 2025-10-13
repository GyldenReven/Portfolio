import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-ctp-surface0 p-4 flex justify-between items-center rounded-b-xl shadow-lg">
            <h1>My Portfolio</h1>
            <menu>
                <a href="./" className="header-link">About</a>
                <a href="projects" className="header-link">Projects</a>
                <a href="contact" className="header-link">Contact</a>
            </menu>
        </header>
    );
};

export default Header;