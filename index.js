/*
# **Entendendo o Desafio**

**Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos apresentados até aqui e replique (ou melhore, por que não?) este projeto prático. Crie seu próprio repositório e aumente seu portfólio de projetos no GitHub, o que pode fazer toda diferença em suas entrevistas técnicas** 😎

**Neste repositório, insira todos os links e arquivos necessários para seu projeto: arquivo de banco de dados, link para o template no Figma, etc.**
*/

let pirataDoChapeuDePalha = {
    nome: "Usopp", nivelDePirata:  8888
}
let nivelDePirata = "Ferro"; // Valor padrão

if (pirataDoChapeuDePalha.nivelDePirata < 1000) {
    nivelDePirata = "Ferro";
} else if (pirataDoChapeuDePalha.nivelDePirata <= 2000) {
    nivelDePirata = "Bronze";
} else if (pirataDoChapeuDePalha.nivelDePirata <= 5000) {
    nivelDePirata = "Prata";
} else if (pirataDoChapeuDePalha.nivelDePirata <= 7000) {
    nivelDePirata = "Ouro";
} else if (pirataDoChapeuDePalha.nivelDePirata <= 8000) {
    nivelDePirata = "Platina";
} else if (pirataDoChapeuDePalha.nivelDePirata <= 9000) {
    nivelDePirata = "Ascendente";
} else if (pirataDoChapeuDePalha.nivelDePirata <= 10000) {
    nivelDePirata = "Imortal";
} else {
    nivelDePirata = "Radiante";
} // ficou repetitivo, mas foi o jeito mais simples que achei de fazer, espero melhorar isso no futuro.

switch (pirataDoChapeuDePalha.nome) {                
    case "Monkey D. Luffy":
        console.log("Luffy é o capitão dos Chapéus de Palha e seu sonho é se tornar o Rei dos Piratas.");
        break;      
    case "Roronoa Zoro":
        console.log("Zoro é o espadachim dos Chapéus de Palha e seu sonho é se tornar o melhor espadachim do mundo.");
        break;
    case "Vinsmoke Sanji":
        console.log("Sanji é o cozinheiro dos Chapéus de Palha e seu sonho é encontrar o All Blue, um mar onde existem peixes de todas as partes do mundo.");
        break;  
    case "Jinbe":
        console.log("Jinbe é o timoneiro dos Chapéus de Palha e seu sonho é alcançar a paz entre humanos e tritões.");
        break;
    case "Nico Robin":
        console.log("Robin é a arqueóloga dos Chapéus de Palha e seu sonho é descobrir a verdadeira história do mundo.");
        break;
    case "Franky":
        console.log("Franky é o carpinteiro dos Chapéus de Palha e seu sonho é construir um navio capaz de viajar para qualquer lugar do mundo.");
        break;
    case "Brook":
        console.log("Brook é o músico dos Chapéus de Palha e seu sonho é reencontrar Laboon, a baleia que ele prometeu voltar a ver.");
        break;
    case "Nami":
        console.log("Nami é a navegadora dos Chapéus de Palha e seu sonho é encontrar o One Piece.");
        break;
    case "Chopper":
        console.log("Chopper é o médico dos Chapéus de Palha e seu sonho é se tornar um médico melhor.");
        break;
    case "Usopp":
        console.log("Usopp é o atirador dos Chapéus de Palha e seu sonho é se tornar um herói.");
        break;
    default:
        console.log("Pirata não encontrado.");
} // queria tentar usar o switch case pois quando o conheci pela primeira vez achei a melhor coisa do mundo kkk
    console.log(pirataDoChapeuDePalha.nome + " é um membro dos Chapéus de Palha. E está no nível de " + nivelDePirata + ".");
    // agradeço ao professor pelo desafio, foi muito divertido de fazer, e espero que tenha ficado bom!