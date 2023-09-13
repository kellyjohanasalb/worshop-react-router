import React from 'react';

function Creations() {
  return (
    <div className="creations text-center mt-8">
      <div className="creations__header">
        <h2 className="text-2xl font-titles">Our creations</h2>
        <button className="btn btn-desktop">See all</button>
      </div>
      <div className="creations__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Lista de creaciones */}
      </div>
      <button className="btn btn-mobile">See all</button>
    </div>
  );
}

export default Creations;

