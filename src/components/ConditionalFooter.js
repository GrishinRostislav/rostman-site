import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const ConditionalFooter = () => {
    const location = useLocation();

    // On the home page ("/"), we have the ContactSection which acts as a footer.
    // So we hide the global Footer to avoid duplication.
    if (location.pathname === "/") {
        return null;
    }

    return <Footer />;
};

export default ConditionalFooter;
