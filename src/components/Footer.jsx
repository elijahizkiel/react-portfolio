import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1em 0', background: '#11f1f1' }}>
            <p>&copy; {new Date().getFullYear()} Developed by Elijahizkiel</p>
        </footer>
    );
};

export default Footer;