import { categorias } from '@/models/Categoria'
import Link from 'next/link'
import CatNavigate from './components/car_navigate';

export default function Home() {


    console.log("children", categorias[0].children[0].parent?.name);
    


    return (
        <main className="">
            
            <h1>Anuncions front</h1>
            <Link href='/admin'>
                Go to Admin
            </Link>

            <hr className='my-5'/>


            <ul>
                {
                    categorias.map( (cat, i) => {

                        return <li key={i}>
                            <p className='font-semibold'>
                                {cat.name}
                            </p>
                            
                            <ul className='text-sm'>
                                {
                                    cat.children.map( (subcat, i) => <li key={i}>{subcat.name} - Hijo de {subcat.parent?.name}</li> )
                                }
                            </ul>
                        
                        </li> 
                    })
                }
            </ul>


            <div className='mt-10'>
                <h1>Navegador de categorías</h1>

                <CatNavigate  />

            </div>

        </main>
    )
}



