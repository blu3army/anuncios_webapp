
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


