import EventList from '@/components/EventList'
import React from 'react'

export default function page() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4 p-3'>
        <EventList/>
    </div>
  )
}
