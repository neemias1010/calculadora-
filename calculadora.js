const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menuPrincipal() {
    console.clear();
    console.log("=== Menu Principal ===");
    console.log("1. Calcular");
    console.log("2. Sair");

    rl.question("Escolha uma opção (1 ou 2): ", function (opcao) {
        if (opcao === '1') {
            menuCalculo();
        } else if (opcao === '2') {
            console.clear();
            console.log("Programa encerrado.");
            rl.close();
        } else {
            console.clear();
            console.log("Opção inválida! Tente novamente.");
            menuPrincipal();
        }
    });
}

function menuCalculo() {
    console.clear();
    console.log("=== Menu de Cálculo ===");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Módulo");
    console.log("6. Voltar");

    rl.question("Escolha uma operação (1-6): ", function (opcao) {
        if (opcao >= '1' && opcao <= '5') {
            pedirNumeros(opcao);
        } else if (opcao === '6') {
            menuPrincipal();
        } else {
            console.clear();
            console.log("Opção inválida! Tente novamente.");
            menuCalculo();
        }
    });
}

function pedirNumeros(opcao) {
    rl.question("Digite o primeiro número: ", function (num1) {
        rl.question("Digite o segundo número: ", function (num2) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let resultado;
            switch (opcao) {
                case '1':
                    resultado = num1 + num2;
                    console.clear();
                    console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
                    break;
                case '2':
                    resultado = num1 - num2;
                    console.clear();
                    console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
                    break;
                case '3':
                    resultado = num1 * num2;
                    console.clear();
                    console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
                    break;
                case '4':
                    if (num2 === 0) {
                        console.clear();
                        console.log("Erro: Divisão por zero não permitida.");
                    } else {
                        resultado = num1 / num2;
                        console.clear();
                        console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
                    }
                    break;
                case '5':
                    resultado = num1 % num2;
                    console.clear();
                    console.log(`Resultado: ${num1} % ${num2} = ${resultado}`);
                    break;
            }
            continuar();
        });
    });
}

function continuar() {
    rl.question("Deseja realizar outro cálculo? (s/n): ", function (resposta) {
        if (resposta.toLowerCase() === 's') {
            menuCalculo();
        } else {
            menuPrincipal();
        }
    });
}


menuPrincipal();
