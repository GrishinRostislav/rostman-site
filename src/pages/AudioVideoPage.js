import React from "react";
import { Helmet } from "react-helmet";
import AudioVideoText from "../components/AudioVideoText";
import GalleryAudioVideo from "../components/AudioVideoGallery";

const AudioVideoPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Audio & Video Systems for Your Home | Rostislav G.</title>
        <meta
          name="description"
          content="I help you create the perfect entertainment space — from immersive home theaters to seamless multi-room sound systems. Let’s bring your vision to life."
        />
        <meta
          name="keywords"
          content="Audio Video Installation, Home Theater, Multi-Room Audio, Sound Systems, AV, Smart Home Entertainment, Canada, Edmonton"
        />
        <link rel="canonical" href="https://rostman.net/services/audio-video" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Audio & Video Systems — Your Vision, My Expertise
        </h1>
        <p className="text-lg text-gray-700">
          From cozy home cinemas to powerful multi-room audio — I design and install custom audio & video solutions tailored to your space and lifestyle. Let’s make your everyday entertainment smarter, sleeker, and more immersive.
        </p>
      </div>

      <AudioVideoText />
      <GalleryAudioVideo />
    </div>
  );
};

export default AudioVideoPage;
