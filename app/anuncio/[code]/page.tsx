import { anunciosDB } from "@/databases/anuncio-db";



export default function Page({params}:{params: {code:string} }){

    const anuncio = anunciosDB[0]


    return(
        <div>
            <h1>{anuncio.title}</h1>
            
            <div>
                
            </div>

            <p>
                code: {params.code}
            </p>

            

        </div>
    );
}