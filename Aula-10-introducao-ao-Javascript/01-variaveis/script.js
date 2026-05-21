//Javascript
//Variáveis
//variáveis podem ser declaradas de três formas, VAR, LET e CONST
//Var: no geral, evite seu uso, pode não ser muito seguro.
//LET: utilize quando for necessário reatribuir o valor da variável
//CONST>: utilize quando Não for necessário reatribuir o valor da variável

//var
var nome = "Diego";
var numero = 23;
nome = "João"
var nome ="josé"
cidade = "Sete Barras"

//LET
let cidade="Registro";
cidade = "sete barras";
//let cidade -> Isso não pode

//CONST

const user = "pedro@ElementInternals.com"

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
