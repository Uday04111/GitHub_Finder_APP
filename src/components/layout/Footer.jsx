import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-8 footer-center  bg-neutral text-neutral-content">
      <p>
        Devloped By <span className=" font-bold"> UDAY CHAVDA</span>
      </p>
      <p>CopyRight &copy; {footerYear} All rights reserved</p>
    </footer>
  );
}

export default Footer;
