import React from 'react';
import Intro from './Intro';
import Creations from './Creations';

function Main() {
  return (
    <main className="container mx-auto p-4">
      <Intro />
      <Creations />
    </main>
  );
}

export default Main;
