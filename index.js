//##LOGICA DO NOSSO JOGO, SEGUE ABAIXO AS REGRAS E ORDENS DE PODER.
//ZEUS GANHA DE CRONOS, PORÉM PERDE PARA URANO.
//Zeus > cronos
//zeus < urano
//CRONOS GANHA DE URANO, PORÉM PERDE PARA ZEUS.
//CRONOS > URANO
//CRONOS < ZEUS
//URANO GANHA DE ZEUS, PORÉM PERDE PARA CRONOS
//URANO > ZEUS
//URANOS < CRONOS

//O jogo é como um pedra,papel e tesoura. Você irá escolher 1 dos guerreiros e a maquina irá escolher outro. Assim vocês irão entrar em uma batalha mitologica em busca da conquista ou do fracasso como guerreiro. Boa sorte e divirta-se.

var prompt = require("prompt-sync")();
console.clear();
//variaveis do projeto//
let contadorComputador = 0;
let contadorUsuario = 0;
let usuario;
let escolhaPrincipal;
let rodadas;
let iniciar = "sim";
let partidas;
const menu = ["1-Historia", "2-Como funciona", "3-iniciar", "4-Sair"];
let respostaMenu;
let novamente = "sim";
const deuseTitans = ["zeus", "urano", "cronos"];
//variaveis que geram um resultado aleatorio para o computador//
let aleatorio = Math.floor(Math.random() * 3);
let resultadoComputador = deuseTitans[aleatorio];
let principalLength;
let possibilidade1 =
  resultadoComputador == deuseTitans[0] && escolhaPrincipal == deuseTitans[2];
let possibilidade2 =
  escolhaPrincipal == deuseTitans[0] && resultadoComputador == deuseTitans[2];
let possibilidade3 =
  resultadoComputador == deuseTitans[2] && escolhaPrincipal == deuseTitans[1];
let possibilidade4 =
  escolhaPrincipal == deuseTitans[2] && resultadoComputador == deuseTitans[1];
let possibilidade5 =
  resultadoComputador == deuseTitans[1] && escolhaPrincipal == deuseTitans[0];
let possibilidade6 =
  escolhaPrincipal == deuseTitans[1] && resultadoComputador == deuseTitans[0];
////////////////////////////////////////////////////////////////

while (novamente == "sim") {
  console.log(
    `Bem-vindos ao novo jogo das produções sueD, dessa vez iremos entrar num campo de batalha entre deuses e titans da mitologia grega. O jogo funciona como um jokenpô, o famoso pedra,papel e tesoura. Abaixo você terá nosso menu principal, por ele você já estara iniciando sua jornada mitologica. Aproveite!! `
  );
  console.log();
  //menu(painel) para iniciar o game.
  console.log(menu[0]);
  console.log(menu[1]);
  console.log(menu[2]);
  console.log(menu[3]);
  console.log("");

  respostaMenu = prompt("Escolha umas das opçoes acima: ");
  console.log();
  if (
    respostaMenu == 1 ||
    respostaMenu == "historia" ||
    respostaMenu == "HISTORIA" ||
    respostaMenu == "Historia"
  ) {
    console.log(
      'Bem-vindos a nossa historia, o jogo foi desenvolvido por Joabe costa, vulgo "JoabesueD", seu inicio se deu por conta de uma ideia de projeto desenvolvida pela Blue EdTech, com isso, acabamos desenvolvendo essa incrivel historia e proporcionando a vocês jogadores uma experiência nostalgica sobre mitologia grega. Nosso jogo foi desenvolvido e criado no dia 28/01/2022 e desde então vem fazendo o maior sucesso mundial, com o total de 23 milhões de acessos.'
    );
    console.log();
  }
  if (
    respostaMenu == 2 ||
    respostaMenu == "Como funciona" ||
    respostaMenu == "COMO FUNCIONA" ||
    respostaMenu == "como funciona"
  ) {
    console.log(
      "Já dito acima o jogo funciona como um pedra, papel ou tesoura. Existe toda uma cadeia de poder entre o deus e os titans.Abaixo vai toda cadeia de poderes de quem pode ganhar de quem!!"
    );
    console.log();
    console.log("ZEUS GANHA DE CRONOS, PORÉM PERDE PARA URANO.");
    console.log("Zeus > cronos");
    console.log("zeus < urano");
    console.log("CRONOS GANHA DE URANO, PORÉM PERDE PARA ZEUS.");
    console.log("CRONOS > URANO");
    console.log("CRONOS < ZEUS");
    console.log("URANO GANHA DE ZEUS, PORÉM PERDE PARA CRONOS");
    console.log("URANO > ZEUS");
    console.log("URANOS < CRONOS");
  }
  if (
    respostaMenu == 3 ||
    respostaMenu == "iniciar" ||
    respostaMenu == "INICIAR" ||
    respostaMenu == "Iniciar"
  ) {
    //******JOGO BASICAMENTE COMEÇA AQUI******//
    usuario = prompt("Digite seu usuario para iniciar o jogo: ");
    console.log();
    while (iniciar == "sim") {
      rodadas = +prompt("Quantas rodadas você deseja jogar? ");
      //Definidor de quantas rodadas irão acontecer//
      for (partidas = rodadas; partidas > 0; partidas--) {
        console.log(`Você está na rodada ${partidas}`);
        do {
          escolhaPrincipal = prompt(
            "Escolha seu guerreiro entre Zeus, Urano ou Cronos: "
          );
          console.log();
        } while (
          escolhaPrincipal != deuseTitans[0] &&
          escolhaPrincipal != deuseTitans[1] &&
          escolhaPrincipal != deuseTitans[2]
        );
        {
          principalLength = deuseTitans.indexOf(escolhaPrincipal);
          console.log(`A escolha do oponente é ${resultadoComputador}. `);
          console.log();

          console.log(escolhaPrincipal);
          console.log("Vs");
          console.log(resultadoComputador);
          console.log();

          // Sistema feito para realizar as comparações e contar as vitorias de cada jogador//

          //zeus ganha de cronos
          if (
            resultadoComputador == deuseTitans[0] &&
            escolhaPrincipal == deuseTitans[2]
          ) {
            contadorComputador++;
            console.log("Zeus ganhou de cronos!!");
            console.log("computador win");
            console.log();
          }
          if (
            escolhaPrincipal == deuseTitans[0] &&
            resultadoComputador == deuseTitans[2]
          ) {
            contadorUsuario++;
            console.log("Zeus ganho de cronos");
            console.log("você ganhou!!");
            console.log();
          }
          //********************************************************************************************//

          // CRONOS GANHA DE URANO, PORÉM PERDE PARA ZEUS.
          if (
            resultadoComputador == deuseTitans[2] &&
            escolhaPrincipal == deuseTitans[1]
          ) {
            contadorComputador++;
            console.log("Cronos ganha de urano!!");
            console.log("computador win");
            console.log();
          }
          if (
            escolhaPrincipal == deuseTitans[2] &&
            resultadoComputador == deuseTitans[1]
          ) {
            contadorUsuario++;
            console.log("Cronos ganha de urano!!");
            console.log("você ganhou!!");
            console.log();
          }
          ////////////////////////////////////////////////////////////////////////////////////////////////
          //URANO GANHA DE ZEUS, PORÉM PERDE PARA CRONOS
          if (
            resultadoComputador == deuseTitans[1] &&
            escolhaPrincipal == deuseTitans[0]
          ) {
            contadorComputador++;
            console.log("Urano ganha de Zeus!!");
            console.log("computador win");
            console.log();
          }
          if (
            escolhaPrincipal == deuseTitans[1] &&
            resultadoComputador == deuseTitans[0]
          ) {
            contadorUsuario++;
            console.log("Urano ganha de Zeus");
            console.log("você ganhou!!");
            console.log();
          }
          ///////////////////////////////////////////////////////////////////////////////////////////////
          if (escolhaPrincipal == resultadoComputador) {
            console.log(
              `Ambos escolheram o mesmo, por isso, a rodada deu impate!!`
            );
            console.log();
          }
        }
      }
      iniciar = prompt("deseja adicionar mais rodadas? ");

      console.log();
      console.log(`${usuario} venceu ${contadorUsuario} rodadas.`);
      console.log(`O computador venceu ${contadorComputador} rodadas`);

      if (contadorComputador > contadorUsuario) {
        console.log();
        console.log(
          `o computador ganhou ${contadorComputador} rodadas, assim se tornou o campeão!!`
        );
      } else {
        console.log();
        console.log(
          `${usuario} ganhou ${contadorUsuario} rodadas, assim você foi o campeão!!`
        );
      }
    }
  }
  if (
    respostaMenu == 4 ||
    respostaMenu == "sair" ||
    respostaMenu == "SAIR" ||
    respostaMenu == "Sair"
  ) {
    console.log("Você está saindo do jogo...");
    console.log("Até breve!");
    console.log("");
    break;
  }

  novamente = prompt("deseja jogar novamente? ");
}
