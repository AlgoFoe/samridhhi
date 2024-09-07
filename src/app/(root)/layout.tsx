import React from 'react'
import Header from '../components/Header'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
        <Header />
        {children}
    </main>
)
}

export default Layout