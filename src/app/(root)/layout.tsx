import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root text-zinc-700'>
        {children}
    </main>
)
}

export default Layout