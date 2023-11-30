import React from "react";

const Copyrightdate = new Date().getFullYear();
function Footer() {
    return  <footer>
        <p>copyright @ {Copyrightdate}</p>;
    </footer>
}

export default Footer;