'use client';


import { useState } from "react";
import { Categoria, categorias } from "@/models/Categoria";



export default function CatNavigate(){


    const [list, setList] = useState(categorias);
    const [selectedCat, setSelectedCat] = useState<Categoria | null>(null);


    const goTo = (cat:Categoria)=>{

        setList(cat.children);
        setSelectedCat(cat);

        pathGenerator(cat);

    }


    const pathGenerator = (cat:Categoria)=>{

        let pointer = cat;
        let arr = [ pointer ];

        while (pointer.parent) {
            pointer = pointer.parent!;
            arr.unshift(pointer);
        }

        console.log("Cats chain",arr);
        return arr;

    }


    return(
        <div>
            <div className='flex'>

               

                {
                    list.map( (cat, i) => {
                        return(
                            <p className="mx-4" key={i} onClick={()=> goTo(cat)}>
                                {cat.name}
                            </p>
                        )
                    })
                }


            </div>

            <h1 className="font-semibold mt-5">
                
                Home
                {
                    selectedCat && 
                    pathGenerator(selectedCat).map( (cat, i)=>{
                        return(
                            <span key={i} onClick={()=> goTo(cat) }>
                                &gt; {cat.name}
                            </span>
                        )
                    })
                    
                }
            </h1>
        </div>
    )
}