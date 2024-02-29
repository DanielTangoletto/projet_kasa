import React from 'react';
import logo from "../../assets/logo_footer.png"

const Footer = () => {
    return (
      <footer className="footer">
        <img src={logo} alt="logo agence de location kasa" className="footer_logo" />
        <p className="footer_text-copyright">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;