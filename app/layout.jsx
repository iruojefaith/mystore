import { Children } from 'react';
import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Mystore',
  description: 'Generated by create next app',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>  
        <main> 
        <Nav />
        {children}
        <Footer />
        </main> 
      </body>
      
    </html>
   
  )
}

export default RootLayout