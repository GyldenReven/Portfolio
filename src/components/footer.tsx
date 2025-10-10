import React from 'react';

const Footer: React.FC = () => (
    <footer className="text-center text-sm text-ctp-subtext0 bg-ctp-mantle p-4 mt-8">
        © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
);

export default Footer;