import './globals.css'
import type { Metadata } from 'next'
export const metadata:Metadata={title:'Ruvison Technologies LLC',description:'Reliable Networks & Trusted Security.'}
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang='en'><body className='bg-white text-slate-800'>{children}</body></html>)}
