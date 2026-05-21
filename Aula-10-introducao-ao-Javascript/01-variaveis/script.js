// Javascript
// VARIÁVEIS
/* Variáveis podem ser declaradas de 3 formas: VAR, LET e CONST */
// VAR: No geral, evite o seu uso, pode não ser muito seguro. Ele pode ser redeclarado e seu valor reatribuído.
// LET: Utilize quando for necessário reatribuir o valor da variável
// CONST: Utilize quando NÃO precisar reatribuir o valor da variável
// VAR:
var nome = "Matheus";
nome = "João";
var nome = "José"
// LET:
let cidade = "Registro"
cidade = "Sete Barras"
// let cidade -> isso não pode
// CONST: 
const user = "pedro@email.com"
// user = "pedro@gmail.com" -> não poderia

// FUNÇÕES DO ELEMENTO WINDOW (navegador)
// Disparando uma janela de alerta no site
window.alert("Bem-vindo ao mundo de Javascript!")
// Disparando uma janela de confirmação
const confirmacao = window.confirm("Vamos começar?")
if (confirmacao == true) {
    //Dispara uma janela de entrada de dados
    const nome = window.prompt("Qual é o seu nome?")
    const idade = window.prompt("Quantos anos você têm?")


    // Escrevendo no site
    document.write("Olá " + nome + "!");     // Concatenação: string + variável
    // Concatenação - Template Strings
    // document.write("Você têm " + idade + " anos")
    document.writeln(` Você tem ${idade} anos!`)

    if (idade >= 18) {
        document.write("Você é maior de idade!")
    } else {
        document.write("Você é menor de idade!")
    }
}

//CRIE UM SITE COM UM SCRIPT QUE PERGUNTE A IDADE DO USUÁRIO. SE A IDADE FOR MAIOR QUE 18. ELE MOSTRA NO SITE: "VOCÊ É MAIOR DE IDADE.", SE NÃO ELE MOSTRA: "VOCÊ É MENOR DE IDADE."
// if (idade >= 18) {

// } else
// ...
// }


