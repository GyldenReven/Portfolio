import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-zinc-700 text-white p-4 flex justify-between items-center">
            <h1>My Portfolio</h1>
            <menu>
                <a href="./" className="mr-4">About</a>
                <a href="projects" className="mr-4">Projects</a>
                <a href="contact">Contact</a>
            </menu>
        </header>
    );
};

export default Header;