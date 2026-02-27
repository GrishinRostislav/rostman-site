import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Consulting Components
import ConsultingHero from '../components/consulting/ConsultingHero';
import ConsultingPhilosophy from '../components/consulting/ConsultingPhilosophy';
import ConsultingExpertise from '../components/consulting/ConsultingExpertise';
import ConsultingExperience from '../components/consulting/ConsultingExperience';
import ConsultingCTA from '../components/consulting/ConsultingCTA';

const ConsultingPage = () => {
    // Scroll to top on mount to ensure the user sees the hero
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#0B0F19] min-h-screen text-white font-sans selection:bg-teal-500 selection:text-white">
            <Helmet>
                <title>Systems Integration Consulting | Rostislav Grishin</title>
                <meta name="description" content="Operational Efficiency & Systems Integration consulting by Rostislav Grishin. Hands-on architecture and IT gap-bridging for Edmonton businesses." />
            </Helmet>

            <ConsultingHero />
            <ConsultingPhilosophy />
            <ConsultingExpertise />
            <ConsultingExperience />
            <ConsultingCTA />
        </div>
    );
};

export default ConsultingPage;
