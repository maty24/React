export const todoReducer = (initalState, action) =>{
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initalState, action.payload] 
        case '[TODO] Remove Todo':
            return initalState.filter(todo => todo.id !== action.payload); //esto hace un nuevo array sin el id que le enviamos
        case '[TODO] Toggle Todo':
            return initalState.map(todo =>{
                if(todo.id ===action.payload){//el payload va a saer el id
                    return{
                        ...todo,
                        done: !todo.done //esto hace que el estado sea diferente al estado actual
                    }
                }
                return todo;
            })
        default:
            return initalState;
    }
}