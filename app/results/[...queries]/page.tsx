import CatPathDisplay from "@/components/cat-path-display";
import CatTreeProvider from "@/providers/cat-tree-provider";

import Link from "next/link";


export default function Page({params}:{params:{
    queries:string[]
}}){


    const cityCode = params.queries[0]; 
    const catCode = params.queries[1];
    return(
        <div>
            <h1>Resultados de la busqueda</h1>

            <Link href={`/home/${cityCode}`} className="link-1">
                Back
            </Link>

            <p>
                City: {params.queries[0]}
            </p>

            
            <div className="flex">
                <span className="mr-2">
                    {cityCode}
                </span>
                <CatTreeProvider>
                    <CatPathDisplay catCode={catCode} />
                </CatTreeProvider>
            </div>
            

        </div>
    );
}