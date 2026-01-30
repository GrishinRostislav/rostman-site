import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const ConditionalFooter = () => {
    const location = useLocation();

    // On the home page ("/") and portfolio gallery, we utilize ContactSection.
    // So we hide the global Footer to avoid duplication.
    if (location.pathname === "/" || location.pathname === "/portfolio-gallery") {
        return null;
    }

    return <Footer />;
};

export default ConditionalFooter;
