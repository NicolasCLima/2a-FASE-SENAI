import React from 'react'

function Estudante() {
    const prayEstudante = () => {
      alert(`
        Senhor dos Códigos,

        Concede-me memória RAM e memória humana.

        Faze com que os bugs da aula não se repliquem na minha cabeça,

        e que o VS Code não trave quando eu mais precisar.

        Livrai-me das provas de múltipla escolha com alternativas parecidas,

        dos professores que trocam tudo na véspera,

        e dos colegas que sabem colar melhor do que estudar.

        Dai-me coragem para levantar a mão,

        e sabedoria para não deletar a pasta errada.
      `);
    };
  
    return (
      <button onClick={prayEstudante}>Oração do Estudante</button>
    );
  }

  export default Estudante