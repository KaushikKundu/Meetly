import SideBar from '@/components/SideBar'
import React from 'react'

export default function HomeLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
        <div className='w-screen h-screen flex'>
            <SideBar />
            {children}
        </div>
    </>
  )
}
