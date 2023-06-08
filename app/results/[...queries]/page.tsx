

export default function Page({params}:{params:{
    queries:string[]
}}){


    console.log(params);
    


    return(
        <div>
            <h1>Resultados de la busqueda</h1>
            <p>
                {params.queries[0]}
            </p>
            <p>
                {params.queries[1]}
            </p>
            <p>
                {params.queries[2]}
            </p>
            <p>
                {params.queries[3]}
            </p>
        </div>
    );
}