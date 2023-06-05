


export default function Page({params}:{params: {code:string} }){

    return(
        <div>
            <h1>Anuncio</h1>
            <p>
                code: {params.code}
            </p>
        </div>
    );
}