"use client"

import React from 'react'
import { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [maintask, setMaintask] = useState([]);

const submithandler = (e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  console.log(title);
  console.log(description);
  setTitle('');
  setDescription('');
}


let renderTask = <h2>No Task Available</h2>
  return (
    <div>
      <h1 className='text-5xl bg-black text-center text-white font-bold p-5 '>My Todo List</h1>
      <>
        <form onSubmit={submithandler}>
          <input
            type="text"
            className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
            placeholder='Enter Title here'
            value={title}
            onChange={(e) => 
              setTitle(e.target.value)}
          />
          <input
            type="text"
            className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
            placeholder='Enter Description here'
            value={description}
            onChange={(e) =>
               setDescription(e.target.value)}
          />
          <button className='bg-black text-2xl text-white font-bold px-4 py-3'>Add Task</button>
        </form>
      </>
      <>
        <div className='p-8 border-slate-200'>
          <ul>
            {renderTask}
          </ul>
        </div>
      </>
    </div>
  )
}

export default page
