export const initialState = {
    todos: [
        {
            task: "Learn reducers!"
            completed: false,
            id: 1
        },
        {
            task: "Learn Context API!"
            completed: false,
            id: 2
        },
        {
            task: "Learn redux!"
            completed: false,
            id: 1
        },
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        task: action.payload,
                        id: Date.now(),
                        completed: false
                    }
                ]
            };
            case "TOGGLE_COMLETED":
            return {
                ...state,
                todos: [state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed})]
            };
            case "CLEAR_COMPLETED":
                return{};
                default:
                    return state;
    }
};