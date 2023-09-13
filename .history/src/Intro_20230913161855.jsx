import React from 'react';

function Intro() {
  return (
    <div className="intro flex flex-col md:flex-row gap-4">
      <img src="./images/desktop/image-interactive.jpg" alt="" className="w-full md:w-1/2" />
      <div className="intro__info md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-titles">The leader in interactive VR</h2>
        <p className="text-gray text-sm md:text-base">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default Intro;

