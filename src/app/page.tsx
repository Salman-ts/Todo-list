"use client"


import React from 'react'
import { useState } from 'react'



const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTasks] = useState([]);





  const submithandler = (e) => {
    e.preventDefault();   
    if (title.trim() === "" || description.trim() === "") {
      return;
    }
    setMainTasks([...mainTask, { title, description }]);
    setTitle("");
    setDescription("");
  }


let renderTask = <h2>No Task Available</h2>

if (mainTask.length > 0) {
  renderTask = mainTask.map((task, index) => {
    return ( 
      <li key={index} className='flex justify-between items-center mb-8'>
      <div className='flex justify-between items-center w-2/3 '>
         <h4 className='text-2xl font-semibold'>{task.title}</h4>
         <h5 className='text-lg font-medium'>{task.description}</h5>
          </div>
         <button className='bg-red-500 text-white px-4 py-2 rounded-lg' onClick={() => {
           const newTasks = mainTask.filter((_, i) => i !== index);
           setMainTasks(newTasks); }}>Delete</button>
     
      </li>
    
    )
  })
} 
    
  return (
    <>
      
      <h1 className='text-5xl bg-black text-center text-white font-bold p-5'>
        My Todo List
      </h1>
      <div className='container mx-auto px-3 py-10 justify-items-center justify-center'>
      <form onSubmit={submithandler}>
        <input
          type="text"
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Title here'
          required={true}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 align-items-center justify-content-center'
          placeholder='Enter Description here'
          required={true}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='bg-black text-2xl text-white font-bold px-4 py-3'>Add Task</button>
      </form>
      </div>
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
      
    
    </>
  )
}

export default page
