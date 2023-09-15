    import React from 'react';

    const CardComponent = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        {/* Contenedor de la imagen */}
        <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <img
            src="./images/image-interactive.jpg"
            alt="Imagen"
            className="w-full h-auto object-cover rounded-lg"
            />
        </div>

        {/* Contenedor del texto */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 absolute bottom-8 right-8">
            <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">
                THE LEADER IN INTERACTIVE VR
            </h2>
            <p className="text-gray-600 text-lg">
                Founded in 2011, Loopstudios has been producing world-class virtual
                reality projects for some of the best companies around the globe.
                Our award-winning creations have transformed businesses through
                digital experiences that bind to their brand.
            </p>
            </div>
        </div>
        </div>
    );
    };

    export default CardComponent;
