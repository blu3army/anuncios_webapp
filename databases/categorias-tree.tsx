import { Categoria } from "@/models/Categoria";

type CategoriaData = {
    code: string,
    name: string,
    children?: string[],
}

let rubrosData = [
    {
        code: 'vivienda',
        name: 'Vivienda',
        children: [
            'departamentos',
            'casas',
        ]
    },
    {
        code: 'sales',
        name: 'Compra y Venta',
        children: [
            'rodados'
        ]
    }
];



let categoriasData = [
    {
        code: 'departamentos',
        name: 'Departamentos',
        children: [],
    },
    {
        code: 'casas',
        name: 'Casas',
        children: [
            'casas-de-campo',
            'casas-familiares'
        ]
    },
    {
        code: 'rodados',
        name: 'Vehículos',
        children: [
            'automoviles',
            'trucks'
        ],
    }
]


let subcategoriasData = [
    {
        code: "automoviles",
        name: "Automóviles",         
    },
    {
        code: "trucks",
        name: "Camionetas",        
    },
    {
        code: 'casas-de-campo',
        name: 'Casas de campo',
    },
    {
        code: 'casas-familiares',
        name: 'Casas familiares'
    }
]


export function treeGenerator(...categoriaArrays:CategoriaData[][]):Categoria[]{
    
    let tree = [];
    

    //Recorremos el primer nivel
    for (const catData of categoriaArrays[0]) {
        
        //Agregamos al tree
        let newCat = new Categoria( { name: catData.name, code: catData.code} );
        
        newCat = walkChildren(newCat, catData.children || [], 0, categoriaArrays[1], categoriaArrays[2] );
        
        tree.push(newCat);
    }




    // return arr.map( (c)=> new Categoria({name: c.name, code: c.code}) )
    return tree;
}


function walkChildren(cat:Categoria, childrenCodes:string[], pointer:number,  ...nextDataArray: CategoriaData[][]):Categoria{

    if (pointer === nextDataArray.length) {
        return cat;
    }

    //Recorremos los hijos del primer nivel, siempre que tenga
    if(childrenCodes && childrenCodes.length > 0){
        for (const childCode of childrenCodes) {
            //Buscamos dentro del siguiente nivel
            for (const sub of nextDataArray[pointer]) {
                if(sub.code === childCode){
                    
                    let childCat =  new Categoria({name: sub.name, code: sub.code});
                    
                    childCat = walkChildren(childCat, sub.children || [], pointer+1, ...nextDataArray);
                    
                    cat.addChildren(childCat);

                }
            }
        }

        return cat;
    }
    else{
        return cat;
    }

}




let tree : Categoria[] = treeGenerator(rubrosData, categoriasData, subcategoriasData);



// subcategorias[1].addChildren(tercercategorias[0]);
// subcategorias[1].addChildren(tercercategorias[1]);

// categorias[0].addChildren(subcategorias[0]);
// categorias[1].addChildren(subcategorias[1]);


export {tree};