import { tree } from "@/databases/categorias-tree";
import { Categoria } from "@/models/Categoria";
import Link from "next/link";

export default function Page({
    params
}:{
    params: {citycode:string}
}
){

    const {citycode} = params;

    return(
        <div>
            <h1 className="title-1">Home by city code : {citycode}</h1>
            <Link href={'/'} className='link-1'>
                Buscar en otra city
            </Link>



            <ul className='mt-10 flex'>
                {
                    tree.map( (cat,i) => 
                        <li key={i} className='mx-10'>
                            <Link href={`/results/${citycode}/${cat.code}`}>
                                {cat.name}
                            </Link>
                            {
                                (cat.children.length > 0) &&
                                catChildren(cat)
                            }
                        </li>
                    )
                }
            </ul>


        </div>
    );







    //Fn recursiva que se encarga de recorrer y renderizar el arbol de categorias
    function catChildren(cat:Categoria){
        return <ul>
            {
                cat.children.map( (child,i) => 
                    <li key={i}>
                        <Link href={`/results/${citycode}/${child.code}`}>
                            {child.name}  ---- Has children: {child.children.length > 0 ? "si" : "no"}
                        </Link>
                        {   
                            (child.children && child.children.length > 0) &&
                            catChildren(child)
                        }
                    </li>
                   
                )
            }
        </ul>
    }
}