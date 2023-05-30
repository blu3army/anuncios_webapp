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
                <div className='py-10 px-20 '>
                    {children}
                </div>
            </body>
        </html>
    )
}
