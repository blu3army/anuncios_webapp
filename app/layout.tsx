import '@/css/globals.css';
import '@/css/titles.css';
import '@/css/buttons.css';
import UserProvider from '@/providers/user_provider';


export const metadata = {
    title: 'Anuncios Today',
    description: 'Anuncios Today App - Un lugar donde puedes ofrecer lo que quieras!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className='px-10 '>                                        
                    <div className='bg-blue-200 py-1 mb-1'>
                        <h1 className='font-semibold text-lg'>Barra de navegación general</h1>
                    </div>
                    
                    {children}
                    
                </div>
            </body>
        </html>
    )
}
