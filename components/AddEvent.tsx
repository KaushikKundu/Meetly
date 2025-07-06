"use client"
import React from 'react'

export default function AddEvent() {
  const [formData, setFormData] = React.useState({
    name: '',
    time: '',
    location: '',
    description: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      };
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }
  return (
    <form
      onSubmit={handleSubmit}
      className='w-auto h-fit flex flex-col items-center justify-center gap-4 p-3 border-2 border-black rounded-lg'
    >
      <input
        type="text"
        name="name"
        placeholder="name of event"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="time"
        placeholder="time"
        value={formData.time}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="location"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit" className='px-3 py-2 bg-black text-white'>
        Create Event
      </button>
    </form>
  );
}
