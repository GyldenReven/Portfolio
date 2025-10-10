import React from 'react';

const Footer: React.FC = () => (
    <footer className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
);

export default Footer;