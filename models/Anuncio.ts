import { Categoria } from "./Categoria";
import { City } from "./City";
import { User } from "./User";


interface AnuncioInterface{

    code:           string;
    title:          string;
    desc:           string;
    descHTML:       string;
    date:           number;

    categoriaTree:  Categoria[];
    author: User;
    
    city: City;
    location: {
        lat: number;
        lng: number;
    }

    

}

export class Anuncio implements AnuncioInterface {
    
    code: string;
    title: string;
    desc: string;
    descHTML: string;
    date: number;
    categoriaTree: Categoria[];
    author: User;
    city: City;
    location: { lat: number; lng: number; };

    constructor({
        code,
        title,
        desc,
        descHTML,
        date,
        categoriaTree,
        author,
        city,
        location,
    }:AnuncioInterface) {
        this.code = code;
        this.title = title;
        this.desc = desc;
        this.descHTML = descHTML;
        this.date = date;
        this.categoriaTree = categoriaTree;
        this.author = author;
        this.city = city;
        this.location = location;
    }
    

    



}