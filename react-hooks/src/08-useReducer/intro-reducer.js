const initalState = [{
    id: 1,
    todo: 'pegarle al joni',
    done: false,
}]

//al reducer tiene 2 argumentos como state y el action
//el action es quien como cambia el estado
const todoReducer = (state = initalState, action = {}) =>{
    if(action.type === '[TODO] add todo'){
        return[...state, action.payload]//añadimos todo el payload(datos)
    }
    return state;
}
let todos = todoReducer()

const newTodo ={
    id: 2,
    todo: 'pegarle al pipe',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}
todos = todoReducer(todos, addTodoAction)
console.log({state: todos});