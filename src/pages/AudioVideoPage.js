import React from "react";
import { Helmet } from "react-helmet";
import AudioVideoText from "../components/AudioVideoText";
import GalleryAudioVideo from "../components/AudioVideoGallery";

const AudioVideoPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Audio & Video Installation Services in Canada | Rostman</title>
        <meta
          name="description"
          content="Transform your entertainment with Rostman's premium audio & video systems. From home theaters to multi-room setups, experience stunning sound and visuals, all controlled with ease."
        />
        <meta
          name="keywords"
          content="Audio Video Installation, Home Theater, Multi-Room Audio, Sound Systems, Smart Home, AV Systems, Custom Installations, Home Entertainment, Canada AV"
        />
        <link rel="canonical" href="https://yourdomain.com/services/audio-video" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Audio & Video Systems by Rostman</h1>
        <p className="text-lg text-gray-700">
          Elevate your entertainment experience with custom audio & video systems designed for your home. Whether it’s a cozy home theater or a full multi-room setup, we bring your vision to life with stunning sound and visuals.
        </p>
      </div>

      <AudioVideoText />
      <GalleryAudioVideo />
    </div>
  );
};

export default AudioVideoPage;
