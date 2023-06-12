'use client';

import { searchCategoria } from "@/functions/search-categoria";
import { Categoria } from "@/models/Categoria";
import { CatTreeContext } from "@/providers/cat-tree-provider";
import { useContext } from "react";


export default function CatPathDisplay({catCode}:{catCode:string}){

    const tree = useContext(CatTreeContext);


    const cat = searchCategoria(catCode, tree!)

    const arrayPath = (cat:Categoria)=>{

        let arr = [];

        let pointer : Categoria | undefined = cat;

        while(pointer != undefined){
            arr.unshift(pointer);
            pointer = pointer.parent;
        }

        return arr;

    }
  

    return(
        <div>
            {
                arrayPath(cat!).map((cat,i)=>
                    <span key={i} className="mr-2">
                        &gt; {
                            cat.name
                        }
                    </span>
                )
            }

        </div>
    );
}