    import React from 'react';

    const CardComponent = () => {
    return (
        <div className="h-screen flex items-center justify-center">
        {/* Contenedor de la imagen */}
        <div className="bg-white p-4 rounded-lg shadow-lg relative w-2/5 h-3/5">
            <img
            src="./images/image-interactive.jpg"
            alt="Imagen"
            className="w-full h-full object-cover rounded-lg"
            />
        </div>

        {/* Contenedor del texto */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-2/5 h-2/5 absolute bottom-4 right-4 ml-4 mb-4">
            <div className="text-center flex flex-col justify-center h-full">
            <h2 className="text-3xl font-semibold mb-4 mt-4">THE LEADER IN INTERACTIVE VR</h2>
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
