import React from 'react'

export default function AddEvent() {
  return (
    <div className='w-auto h-fit flex flex-col items-center justify-center gap-4 p-3 border-2 border-black rounded-lg'>
        <input type="text" placeholder='name of event' />
        <input type="text" placeholder='time' />
        <input type="text" placeholder='location' />
        <input type="text" placeholder='description ' />
        <button className='px-3 py-2 bg-black text-white'>Create Event</button>
    </div>
  )
}
