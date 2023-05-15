import React, { useState } from 'react'

const Todos = ({ task, deleteTodo, completeTodo }) => {

    const [complete, setComplete] = useState();
    const [check, setCheck] = useState("radio-button-off-outline");

    const handleDelete = () => {
        deleteTodo(task.id);
    }

    const handleComplete = () => {
        setComplete({textDecoration: 'line-through'});
        setCheck("checkmark-circle-outline");
        setTimeout(() => {
            setComplete({textDecoration: 'none'});
            setCheck("radio-button-off-outline");
            completeTodo(task.id);
        }, 500);
    }

    return (
        <div className='w-80 h-11 border-none text-base rounded-md m-2 flex bg-black text-center items-center px-2 relative max-smallest:w-72'>
            <button className='m-0 p-0 flex justify-center hover:text-black hover:bg-white rounded-xl' title='Completed'><ion-icon name={check} onClick={handleComplete}></ion-icon></button>
            <span className='text-white w-56 overflow-hidden whitespace-nowrap text-ellipsis text-start ml-2 max-smallest:w-52' style={complete}>{task.task}</span>
            <div className="right-1 absolute">
                {/* <button className='bg-black w-8 text-white h-8 p-1 rounded-md hover:text-black hover:bg-white' title='Edit'><ion-icon name="create-outline"></ion-icon></button> */}
                <button className='bg-black w-8 text-white h-8 p-1 rounded-md hover:text-black hover:bg-white' title='Delete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
            </div>
        </div>
    )
}

export default Todos

// () => deleteTodo(task.id)