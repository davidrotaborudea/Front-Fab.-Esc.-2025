import React, { ReactNode } from 'react'

const Index = ({children}: {children: ReactNode}) => {
  return (
    <div className='p-4 h-screen'>
         {children}
    </div>
  )
}

export default Index