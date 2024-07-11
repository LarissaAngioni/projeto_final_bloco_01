import leia = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Racao } from "./src/model/Racao";
import { Brinquedo } from "./src/model/Brinquedo";

export function main() {

    let opcao, tipo, preco, id: number;
    let nome, tipoAnimal, sabor, tipoRacao, material: string;

    const tipoProdutos = ["Ração", "Brinquedo"];
    const produtos: ProdutoController = new ProdutoController();
    
    produtos.cadastrar(new Racao(produtos.gerarId(), "Ração Natural Guabi", 1, "Gatos", 30, "Seca", "Frango"));
    produtos.cadastrar(new Racao(produtos.gerarId(), "Sachê Whiskas", 1, "Gatos", 5, "Úmida", "Salmão"));

    produtos.cadastrar(new Brinquedo(produtos.gerarId(), "Corda", 2, "Cachorros", 15, "Corda"));
    produtos.cadastrar(new Brinquedo(produtos.gerarId(), "Ratinho", 2, "Gatos", 10, "Tecido e Catnip"));

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

                console.log("Digite o Nome do Produto: ");
                nome = leia.question("");

                console.log("Digite o Tipo do Produto: ");
                tipo = leia.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

                console.log("Digite o preço do produto: ");
                preco = leia.questionFloat("")

                console.log("Digite o tipo de animal: ");
                tipoAnimal = leia.question("")

                switch (tipo) {
                    case 1:
                        console.log("Digite o tipo de ração: ");
                        tipoRacao = leia.question("");

                        console.log("Digite o sabor: ");
                        sabor = leia.question("");

                        produtos.cadastrar(
                            new Racao(produtos.gerarId(), nome, tipo, tipoAnimal, preco, tipoRacao, sabor)
                        );
                        break;
                    case 2:
                        console.log("Digite o material: ");
                        material = leia.question("");

                        produtos.cadastrar(
                            new Brinquedo(produtos.gerarId(), nome, tipo, tipoAnimal, preco, material)
                        );
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                produtos.listarProdutos();
                keyPress();
                break;
            case 3:
                console.log("\n\nListar Produto pelo ID\n\n");
                console.log("Digite o ID do Produto: ");
                id = leia.questionInt("");

                produtos.listarPorID(id);

                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                console.log("Digite o ID do Produto: ");
                id = leia.questionInt("");

                let produto = produtos.buscarNoArray(id);

                if (produto){
                    console.log("Digite o Nome do Produto: ");
                    nome = leia.question("");

                    console.log("Digite o Tipo do Produto: ");
                    tipo = leia.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

                    console.log("Digite o preço do produto: ");
                    preco = leia.questionFloat("")

                    console.log("Digite o tipo de animal: ");
                    tipoAnimal = leia.question("")

                    switch (tipo) {
                        case 1:
                            console.log("Digite o tipo de ração: ");
                            tipoRacao = leia.question("");
    
                            console.log("Digite o sabor: ");
                            sabor = leia.question("");
    
                            produtos.atualizar(
                                new Racao(id, nome, tipo, tipoAnimal, preco, tipoRacao, sabor)
                            );
                            break;
                        case 2:
                            console.log("Digite o material: ");
                            material = leia.question("");
    
                            produtos.atualizar(
                                new Brinquedo(id, nome, tipo, tipoAnimal, preco, material)
                            );
                            break;
                    }
                    
                } else {
                    console.log(`Produto de ID ${id} não encontrado!`);
                    
                }

                keyPress();
                break;
            case 5:
                console.log("\n\nDeletar Produto\n\n");

                console.log("Digite o ID do Produto: ");
                id = leia.questionInt("");

                produtos.deletar(id);

                
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