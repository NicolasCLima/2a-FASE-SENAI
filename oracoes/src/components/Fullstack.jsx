import React from 'react'

function Fullstack() {


    const prayFullstack = () => {
        alert(`
        Senhor Git, dai-me forças para subir a branch certa,

        Coragem para lidar com o merge,

        E sabedoria para entender o código que eu mesmo escrevi ontem.

        Concedei-me domínio sobre o front, o back, e o café.

        Protegei minha stack das atualizações quebradoras,

        E dai-me fé nos testes automatizados.

        Pois teu é o commit,

        O build e a glória do log,

        Agora e para sempre,
          `);
        };

    return (
        <button onClick={prayFullstack}>Oração do Fullstack</button>
        );
}

export default Fullstack