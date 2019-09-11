// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList =(props) => {
   
        return (
            <div>
            {props.todos.map(todo => <Todo key={todo.id} 
                                            todo={todo}
                                            toggleCompleted={props.toggleCompleted}
                                            />)}
            </div>
        );
    }


export default TodoList;