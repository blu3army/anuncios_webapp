import { Categoria } from "@/models/Categoria";
import Link from "next/link";
import { UserDisplay } from "../../../components/user-display";
import UserProvider from "@/providers/user-provider";
import CatTreeProvider from "@/providers/cat-tree-provider";
import CatsDisplay from "./cats-display";

export default function Page({
    params
}:{
    params: {citycode:string}
}
){


    const {citycode} = params;

    return(
        <div>
            <h1 className="title-1">Home by city code : {citycode}</h1>
            <Link href={'/'} className='link-1'>
                Buscar en otra city
            </Link>

            
            <UserProvider>
                <UserDisplay/>
            </UserProvider>
            

            <CatTreeProvider>
                <CatsDisplay cityCode={citycode} />
            </CatTreeProvider>


        </div>
    );







    
}