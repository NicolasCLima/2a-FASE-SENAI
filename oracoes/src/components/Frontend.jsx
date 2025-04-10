import React from 'react'

function Frontend() {
    const prayFrontend = () => {
      alert(`
        Ave CSS, cheia de bugs,

        O framework é convosco, 

        Bendita sois vós entre as telas, 

        E bendito é o fruto do vosso DOM: o pixel perfeito. 

        Santa Documentação, mãe da UI, 

        Rogai por nós, devs visuais, 

        Agora e na hora do push final.

        Hover.
      `);
    };
  
    return (
      <button onClick={prayFrontend}>Oração do Frontend</button>
    );
  }

  export default Frontend