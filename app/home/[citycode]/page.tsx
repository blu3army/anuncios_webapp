import Link from "next/link";

export default function Page({
    params
}:{
    params: {citycode:string}
}
){

    return(
        <div>
            <h1 className="title-1">Home by city code : {params.citycode}</h1>
            <Link href={'/'} className='link-1'>
                Buscar en otra city
            </Link>
        </div>
    );
}