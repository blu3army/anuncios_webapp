import { Anuncio } from "@/models/Anuncio";
import { citiesDB } from "./cities-db";
import { searchCategoria, tree } from "./categorias-tree";



export const anunciosDB : Anuncio[] = [


    {
        title: 'Vendo Focus S 2019',
        code: 'vendo-focus-s-2019-2253',
        desc: 'Una descripción',
        descHTML: '<h1>Una descripción</h1>',
        author: {
            username: 'nikolai',
            displayName: 'Nicolas Bressan',
            email: 'nikolai@gmail.com',
            uid: '11111'
        },
        categoriaTree: [ 
            searchCategoria ('sales', tree)!,  
            searchCategoria('rodados', tree)!, 
            searchCategoria('automoviles', tree)!
        ],
        city: citiesDB[0],
        date: 123124121,
        location: {
            lat: 0,
            lng: 0,
        }
    },


]

