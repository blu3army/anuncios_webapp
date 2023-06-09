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
    },
    {
        code: 'jobs',
        name: 'Bolsa de trabajo',
        children: ['finance'],
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
    },
    {
        code: 'finance',
        name: 'Contabilidad y Finanzas',
        children: [
            'contador', 
            'administrativo', 
            'tesorero'
        ]
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
    },
    {
        code: 'contador',
        name: 'Contador',
    },
    {
        code: 'administrativo',
        name: 'Administrativo',

    },
    {
        code: 'tesorero',
        name: 'Tesorero',
    }
]


function treeGenerator(...categoriaArrays:CategoriaData[][]):Categoria[]{
    
    let tree = [];
    //Recorremos el primer nivel
    for (const catData of categoriaArrays[0]) {
        
        //Agregamos al tree
        let newCat = new Categoria( { name: catData.name, code: catData.code} );
        
        newCat = walkChildren(newCat, catData.children || [], 0, categoriaArrays[1], categoriaArrays[2] );
        
        tree.push(newCat);
    }

    return tree;
}


function walkChildren(cat:Categoria, childrenCodes:string[], pointer:number,  ...nextDataArray: CategoriaData[][]):Categoria{

    if (pointer === nextDataArray.length) {
        return cat;
    }

    //Recorremos los hijos del primer nivel, siempre que tenga
    if(childrenCodes.length > 0){
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

export function searchCategoria(id:string, arr:Categoria[]) : Categoria | null {
    
    for (const cat of arr) {
        
        if(cat.code === id){
            return cat;
        }

        if(cat.children.length > 0){
        
            let result = searchCategoria(id, cat.children);
            
            if(result === null){
                continue;
            }
            else{
                return result;
            }


        }

    }

    return null;



}



let tree : Categoria[] = treeGenerator(rubrosData, categoriasData, subcategoriasData);


export {tree};