import leia = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                  PETSHOP PETZINHO                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Listar Produto pelo ID               ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("                                                     ");
        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 6) {
            console.log("\nPETSHOP PETZINHO - Tudo pro seu pet!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");


                keyPress();
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                keyPress();
                break;
            case 3:
                console.log("\n\nListar Produto pelo ID\n\n");
                
                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                keyPress();
                break;
            case 5:
                console.log("\n\nDeletar Produto\n\n");

                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress();
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Larissa ✨");
    console.log("Larissa Angioni - larissaangioni@gmail.com");
    console.log("github.com/larissaangioni");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}

main();