import React from 'react';
import '../../Style/Footer.css'
function Footer() {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-right">
                    <a href="#"><i className="fa-brands fa-line"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                </div>
                <div className="footer-left">
                    <p className="footer-links">
                        <a className="link-1" href="#">Home</a>
                        <a href="#">Line</a>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">GitHub</a>
                    </p>
                    <p>Create By Mobgkol Pokpipat &copy; 2024</p>
                    <p className='mt-2'>React + Daisy UI</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
