import {useEffect, useReducer} from 'react';
import { TodoAdd } from './todoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initalState = [

]

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [] //traeme los objetos que estan en localstore y si no hay nada un array
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initalState, init)

    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos))//el todos le pongo como nombre y el localstora solo graba strings
    },[todos]) 


    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);//se la envio al reducer mediante el dispatch
    }

    const handleDeleteTodo = (id) =>{
        dispatch ({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) =>{
        dispatch ({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }
  return (
    <>
     <h1>Todo (10) , <small>pendientes: 2</small></h1>
     <hr />
     <div className="row">
         <div className="col-7">
             <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
         </div>
         <div className="col-5">
             <h4>Agregar Todo</h4>
             <hr />
             <TodoAdd onNewTodo={handleNewTodo}/>
         </div>
     </div>

    </>
  )
}
