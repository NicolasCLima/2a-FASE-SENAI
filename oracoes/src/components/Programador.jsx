import React from 'react'

function Programador() {


    const prayProgramador = () => {
        alert(`
        O Senhor é meu debug, nada me faltará.

        Em loops tranquilos me faz deitar,

        e me guia pelas threads seguras da lógica.

        Ainda que eu ande pelo vale dos sistemas legados,

        não temerei o código antigo,

        pois tu estás comigo:

        tua stack e teu terminal me consolam.

        Preparas um café diante de mim

        na presença dos meus erros.

        Unge minha cabeça com boas práticas,

        e o meu Git transborda.

        Certamente a sintaxe limpa e o deploy estável

        me seguirão todos os commits da minha vida,

        e habitarei no repositório sagrado para todo o sempre.
          `);
        };

    return (
        <button onClick={prayProgramador}>Oração do Programador</button>
        );
}

export default Programador