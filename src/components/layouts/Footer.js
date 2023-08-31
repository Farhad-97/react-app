import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p className="left">
                <a href="https://github.com/m-f-d" target="blank">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/farhad86/" target="blank">
                    Linkedin
                </a>
                <a href="mailto:mentorbd86@gmail.com" target="blank">
                    Email
                </a>
                <a href="http://farhad.intels.co/" target="blank">
                    Website
                </a>
            </p>
            <p className="right">Developed with &copy; FARHAD AHMED {currentYear}</p>
        </footer>
    );
}

export default Footer;
