import { Categoria } from "./Categoria";
import { User } from "./User";


interface AnuncioInterface{

    code:           string;
    title:          string;
    desc:           string;
    descHTML:       string;
    date:           number;

    categoriaTree:  Categoria[];
    author: User;

    getTitle():string;

}

class Anuncio implements AnuncioInterface {
    constructor(parameters) {
        
    }
    code: string;
    title: string;
    desc: string;
    descHTML: string;
    date: number;
    categoriaTree: Categoria[];
    author: User;
    getTitle(): string {
        throw new Error("Method not implemented.");
    }
}