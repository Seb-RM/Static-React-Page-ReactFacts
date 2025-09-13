import React from "react";

import reactLogo from "../assets/react-logo.png";

export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <img src={reactLogo} alt="React Logo" />
                    <span>React Facts</span>
                </nav>
            </header>
        </>
    );
}