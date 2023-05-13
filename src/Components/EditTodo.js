import React from 'react'

const EditTodo = () => {
    return (
        <>
            <form action="" className='flex justify-center items-center m-2'>
                <input type="text" className='w-64 h-9 border-2 rounded-md border-black text-white bg-black focus:outline-none px-2 py-0 active:outline-none max-smallest:w-56' required />
                <button className='bg-black border-2 border-black text-white h-9 p-1 mx-1 rounded-md hover:text-black hover:bg-white'>Update</button>
            </form>
        </>
    )
}

export default EditTodo
