
interface CategoriaInterface {

    parent?: Categoria;
    children: Categoria[];

    name: string;
    code: string;

}



export class Categoria implements CategoriaInterface {
    
    parent?: Categoria;
    children: Categoria[] = [];
    
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


let tercercategorias : Categoria[] = [
    new Categoria({
        code: "automoviles",
        name: "Automóviles", 
    }),
       
    new Categoria({
        code: "trucks",
        name: "Camionetas",
    })
]


let subcategorias:Categoria[] = [
    new Categoria({
        code: "departamentos",
        name: "Departamentos", 
    }),
       
    new Categoria({
        code: "rodados",
        name: "Vehículos",
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

subcategorias[1].addChildren(tercercategorias[0]);
subcategorias[1].addChildren(tercercategorias[1]);

categorias[0].addChildren(subcategorias[0]);
categorias[1].addChildren(subcategorias[1]);


export {categorias};