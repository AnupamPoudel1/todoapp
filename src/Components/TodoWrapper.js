import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import DigitalaClock from './DigitalClock'
import Todos from './Todos'
// import EditTodo from './EditTodo'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    }

    const [showhide, setShowhide] = useState({ display: "flex" });

    useEffect(() => {
        if(todos.length !== 0){
            setShowhide({display: "none"});
        }
    })

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <div className="min-h-full w-96 bg-yellow text-white rounded-lg px-2 py-6 flex flex-col justify-center items-center text-center my-12 max-smallest:w-80">
                <DigitalaClock />
                <div className="m-10 flex-col justify-center text-center items-center py-16 " style={showhide}>
                    <ion-icon name="clipboard-outline" size='large'></ion-icon>
                    <p className='text-2xl mt-5 font-bold'>No task added till now.</p>
                </div>

                {todos.map((todo, index) => (
                    <Todos task={todo} key={index} deleteTodo={deleteTodo} />
                ))}

                <TodoForm addTodos={addTodo} />
            </div>
        </>
    )
}

export default TodoWrapper