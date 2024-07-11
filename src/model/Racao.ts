import { Produto } from "./Produto";

export class Racao extends Produto {
    private _tipoRacao: string;
    private _sabor: string;


	constructor(id: number, nome: string, tipo: number, tipoAnimal: string, preco: number, tipoRacao: string, sabor: string) {
        super(id, nome, tipo, tipoAnimal, preco);
		this._tipoRacao = tipoRacao;
		this._sabor = sabor;
	}


	public get tipoRacao(): string {
		return this._tipoRacao;
	}
	public get sabor(): string {
		return this._sabor;
	}
	public set tipoRacao(value: string) {
		this._tipoRacao = value;
	}
	public set sabor(value: string) {
		this._sabor = value;
	}


    public visualizar(){
        super.visualizar();
        console.log(`Tipo de Ração: ${this._tipoRacao}`);
        console.log(`Sabor da Ração: ${this._sabor}`);
    }
}
