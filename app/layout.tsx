import './css/globals.css'


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
                <div className='py-2 px-20 '>
                    
                    <p>--- Layout ---</p>
                    <div className='bg-blue-200 py-5'>
                        <h1 className='font-semibold text-lg'>Barra de navegación</h1>
                    </div>

                    {children}
                </div>
            </body>
        </html>
    )
}
