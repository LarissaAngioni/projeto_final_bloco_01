export abstract class Produto {
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _tipoAnimal: string;
    private _preco: number;
    


	constructor(id: number, nome: string, tipo: number, tipoAnimal: string, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
        this._tipoAnimal = tipoAnimal;
		this._preco = preco;
	}


	public get id(): number {
		return this._id;
	}
	public get nome(): string {
		return this._nome;
	}
	public get tipo(): number {
		return this._tipo;
	}
	public get preco(): number {
		return this._preco;
	}
	public get tipoAnimal(): string {
		return this._tipoAnimal;
	}
	public set id(value: number) {
		this._id = value;
	}
	public set nome(value: string) {
		this._nome = value;
	}
	public set tipo(value: number) {
		this._tipo = value;
	}
	public set preco(value: number) {
		this._preco = value;
	}
	public set tipoAnimal(value: string) {
		this._tipoAnimal = value;
	}


    public visualizar(): void {
        let tipo: string = ""
        switch (this._tipo) {
            case 1:
                tipo = "Ração";
                break;
            case 2:
                tipo = "Brinquedo";
                break;
        }
        console.log("\n-------Produto");
        console.log(`ID do Produto: ${this._id}`);
        console.log(`Nome do Produto: ${this._nome}`);
        console.log(`Tipo do Produto: ${tipo}`);
        console.log(`Tipo de Animal: ${this.tipoAnimal}`);
        console.log(`Preço do Produto: R$${this.preco.toFixed(2)}`);
    }

}
