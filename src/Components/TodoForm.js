import React, {useState} from 'react'

const TodoForm = ({addTodos}) => {

  const [ip, setIp] = useState('')

  const handleChange = (e) => {
      setIp(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(ip);
    setIp("");
  }

  return (
    <div>
      <form action="" className='flex justify-center items-center m-2' onSubmit={handleSubmit}>
        <input type="text" className='w-72 h-9 border-2 rounded-md border-black text-black focus:outline-none px-2 py-0 active:outline-none max-smallest:w-56' value={ip} onChange={handleChange} required/>
        <button className='bg-black border-2 border-black text-white h-9 p-1 mx-1 rounded-md hover:text-black hover:bg-white' onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
