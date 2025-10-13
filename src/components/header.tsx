import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-copper-500 border-copper-600 border-t-0 border-3 p-4 flex justify-between items-center rounded-b-lg shadow-lg">
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