import { Produto } from "./Produto";

export class Brinquedo extends Produto {
    private _material: string;


	constructor(id: number, nome: string, tipo: number, tipoAnimal: string, preco: number, material: string) {
        super(id, nome, tipo, tipoAnimal, preco);
		this._material = material;
	}


	public get material(): string {
		return this._material;
	}
	public set material(value: string) {
		this._material = value;
	}


    public visualizar(){
        super.visualizar();
        console.log(`Material do Brinquedo: ${this._material}`);
    }
}
