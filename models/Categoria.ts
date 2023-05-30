
interface CategoriaInterface {

    parent?: CategoriaInterface;
    children: CategoriaInterface[];

    name: string;
    code: string;

}



class Categoria implements CategoriaInterface {
    
    parent?: CategoriaInterface;
    children: CategoriaInterface[] = [];
    
    name: string;
    code: string;


    constructor({name, code}:{name:string, code:string}){
        this.name = name;
        this.code = code;
    }

    addChildren(categoria:Categoria): void {
        
        categoria.parent = this;
        
        this.children?.push(categoria);
        

    }
    

}


let subcategorias:Categoria[] = [
    new Categoria({
        code: "departamentos",
        name: "Departamentos", 
    }),
       
    new Categoria({
        code: "automoviles",
        name: "Automóviles",
    })

]





let categorias:Categoria[] = [
    new Categoria({
        code: "alquileres",
        name: "Alquileres",
    }),
    new Categoria({
        code: "marketplace",
        name: "Compras y Ventas",
        
    }),
    new Categoria({
        code: "trabajo",
        name: "Bolsa de trabajo",
    }),
    new Categoria({
        code: "eventos",
        name: "Eventos",
    }),
]



categorias[0].addChildren(subcategorias[0]);
categorias[1].addChildren(subcategorias[1]);


export {categorias};