import React, { useContext } from 'react';
import { taskContext } from './taskContext';



const List = ()=> {
    const {taskItems , setTaskItems} = useContext(taskContext)
    const handleTrueOrFalseTask = (id) => {
     const index = taskItems.findIndex(t =>t.id == id )
     let newTaskItems = [...taskItems]
     newTaskItems[index].done = ! newTaskItems[index].done 
     setTaskItems(newTaskItems)
    }
    const handleDeleteTask = (id) => {
        const newTasks = taskItems.filter(t =>t.id !== id )
        setTaskItems(newTasks)
        }
    if (taskItems.length) { 
        return (
        <div className=' flex w-[40%] min-w-[600px] m-4  flex-col backdrop-contrast-50  justify-center items-center   backdrop-blur-xl backdrop-brightness-100 rounded-md '>
        {
        taskItems.map(t=>(
            <div className='flex  w-[90%] h-[60px] flex-row backdrop-contrast-50 backdrop-brightness-200  justify-center items-center backdrop-blur-xl'>
            <div className={`w-[70%] h-[70%] shadow-md rounded-lg m-4 ${t.done ? "bg-green-300" : "bg-red-300" } justify-center items-center content-center opacity-55` }>{t.title} </div>
            <div className='flex flex-row justify-center items-center'>
                <button className=' font-awsome w-[30px] h-[30px] shadow-md m-2 rounded-lg bg-black text-white ' onClick={() => { return handleDeleteTask(t.id) }}></button>
                {
                    t.done ? (
                        <button className='font-awsome w-[30px] h-[30px] shadow-md m-2  rounded-lg  bg-red-700'onClick={ () =>{ return handleTrueOrFalseTask(t.id)}}></button>
                    ) : (
                        <button className=' font-awsome w-[30px] h-[30px] shadow-md m-2  rounded-lg bg-green-600 ' onClick={ () =>{ return handleTrueOrFalseTask(t.id)}}></button>
                    )
                }
                
                
            </div>
                </div>
        ))
        }
        </div>
    )
        
    } else {
        return (
<div className=' flex w-[40%] min-w-[600px] m-4 min-h-[55px]  flex-col backdrop-contrast-50  justify-center items-center   backdrop-blur-xl backdrop-brightness-100 rounded-md '> کاری ثبت نشده است :)</div>        )

    }


}

export default List ;