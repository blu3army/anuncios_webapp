import { searchCategoria, tree } from "@/databases/categorias-tree";
import Link from "next/link";


export default function Page({params}:{params:{
    queries:string[]
}}){


    const cityCode = params.queries[0]; 
    const cat = searchCategoria(params.queries[1], tree ); 

    return(
        <div>
            <h1>Resultados de la busqueda</h1>

            <Link href={`/home/${cityCode}`} className="link-1">
                Back
            </Link>

            <p>
                City: {params.queries[0]}
            </p>
            <p>
                Categoria buscada: { cat?.name }
            </p>
        </div>
    );
}