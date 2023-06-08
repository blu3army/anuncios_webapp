import Link from 'next/link'
import { Metadata } from 'next';
import { CitiesDB } from '@/databases/cities-db';
import { tree } from '@/databases/categorias-tree';


//Metadatas
export const metadata : Metadata = {
    title: "Anuncios | Home"
}

//Page
export default function Home() {


    // console.log("root",tree);
    // console.log("tree[0]", tree[0]);
    // console.log("tree[0].children", tree[0].children);
    // console.log("tree[0].children[0]", tree[0].children[0]);
    console.log("tree[0].children[0].children", tree[0].children[1].children);
    
    
       

    return (
        <main className="">
            <h1 className='title-1'>Home page</h1>

            <h2 className='title-2'>
                Elegir ciudad de búsqueda, que puede detectarse automaticamente de ser posible, sino que elija el client
            </h2>


            {/* Cuando no tenemos ciudad seleccionada */}
            <div>
                <p className='advice'>Imagen de fondo</p>
                <input type='text' placeholder='Buscar ciudad' className='p-1' />
                <button className='bg-stone-600 text-stone-200 p-1'>Go</button>
                <div>
                    
                    {
                        CitiesDB.map((city, i)=>
                            <Link href={`/home/${city.code}`} key={i}>
                                <p>
                                    {city.name}
                                </p>
                            </Link>
                        )
                    }

                </div>
            </div>


            {/* Una vez que tenemos ciudad seleccionada, mostramos rubros y categorias */}
            <div>
            </div>

            

            <div className='mt-10'>
                {
                    tree.map( (cat,i) => 
                        <p key={i}>
                            <p>
                                {cat.name}
                            </p>
                            {
                                catChildren(cat)
                            }
                        </p>
                    )
                }
            </div>


         
        </main>
    )
}


function catChildren(cat:Categoria){
    return <ul>
        {
            cat.children.map( (child,i) => 
                <li key={i}>
                    <p>
                        {child.name}
                    </p>
                    {   
                        (child.children && child.children.length > 0) &&
                        catChildren(child)
                    }
                </li>
               
            )
        }
    </ul>
}
