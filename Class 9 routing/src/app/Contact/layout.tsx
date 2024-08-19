"use client"

export default function ContactLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <html lang="en">
                <body>
                    <h1>Hello world</h1>
                    {children}
                </body>
            </html>
        </>
    )
}