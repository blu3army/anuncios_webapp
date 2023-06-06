import SimpleButton from "@/components/simple_button";


type Username = {
    id:string,
    name:string,
}

async function getUsername({code}:{code:string}) {
    
    const response = await fetch(`http://localhost:8080/username/${code}/id/987789`, { cache : 'no-store'});
    const username:Username = await response.json();
    
    console.log("----------------------- RESPONSE ---------------------------", username);
    
    return username;

}



export default async function Page({params}:{params: {code:string}}){

    const username : Username = await getUsername({code: params.code});

  
    

    return(
        <div>
            <h1>
                Profile: {params.code}
            </h1>
            <p>
                Recuperado desde el Go Server: {username.name} with id: {username.id}
            </p>
            <p>
                <SimpleButton />
            </p>
        </div>
    );
}