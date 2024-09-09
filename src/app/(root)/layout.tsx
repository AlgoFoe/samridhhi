import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
        <Header />
        {children}
        <Footer />
    </main>
)
}

export default Layout