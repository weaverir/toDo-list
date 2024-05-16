import React, { useContext, useState } from 'react';
import { taskContext } from './taskContext';
import Title from './title';



const Header = ()=> {
    const [task , setTask] = useState ("")
    const {taskItems , setTaskItems} = useContext(taskContext)

    const handleSetTask = (event) => {
        setTask(event.target.value)
    }
    const handleAddTask = () => {
        setTaskItems([...taskItems , { id: Math.random() , title : task , done : false}])
setTask("")
    }
return (
    <div className=' flex w-[40%] min-w-[600px]  flex-row backdrop-contrast-50  justify-center items-center h-[60px]  backdrop-blur-xl backdrop-brightness-100 rounded-md '>
        <input type='text' className=' rounded-lg m-10 w-[60%] h-[60%] content-center' value={task} onChange={handleSetTask}></input>
<button type='submit' className=' bg-green-500 rounded-md w-[70px] m-10 h-[60%] ' onClick={handleAddTask}>ثبت</button>
    </div>
)

}

export default Header ;