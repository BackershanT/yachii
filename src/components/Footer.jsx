import React from 'react';
import ScroolToTop from './ScrollToTop';
const Footer = () => {
    return (
        <>
        <footer id="footer" className="footer dark-background">            
            <div className="container copyright text-center mt-4">
                <p><span>Copyright @2025 </span> <strong className="px-1 sitename">Yachii</strong> <span>All Rights Reserved</span></p>
            </div>
        </footer>
       <ScroolToTop/>
        </>
    );
};
export default Footer;