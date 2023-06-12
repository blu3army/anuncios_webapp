'use client';

import { Categoria } from "@/models/Categoria";
import { CatTreeContext } from "@/providers/cat-tree-provider";
import Link from "next/link";
import { useContext } from "react";

export default function CatsDisplay({cityCode}:{cityCode:string}){


    let tree = useContext(CatTreeContext);


    return(
        
        <ul className='mt-10 flex'>
            {
                tree?.map( (cat,i) => 
                    <li key={i} className='mx-10'>
                        <Link href={`/results/${cityCode}/${cat.code}`}>
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
        
    );


    //Fn recursiva que se encarga de recorrer y renderizar el arbol de categorias
    function catChildren(cat:Categoria){
        return <ul>
            {
                cat.children.map( (child,i) => 
                    <li key={i}>
                        <Link href={`/results/${cityCode}/${child.code}`}>
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