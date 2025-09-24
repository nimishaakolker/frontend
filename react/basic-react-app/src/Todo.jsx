import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todo () {
    let [todo, setTodo] = useState([{task : "sample task", id : uuidv4(), isDone : false}]);
    let [newTodo, setNewTodo] = useState("");
//{} ki jgh () se return keyword use kie bina ui me dikhega
    let addNewTask = () => {
        setTodo((prevTodo) => {
            return [...prevTodo, {task: newTodo, id : uuidv4(), isDone : false}, ]
        })
      
        setNewTodo("");
    }

    let updateTodo = (event) => {
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodo((prevTodo) => todo.filter((prevTodo) => prevTodo.id != id)
        )
    }

    let upperCaseAll = () => {
        setTodo((prevTodo) =>
            prevTodo.map((el) => {
                return {
                    ...el,
                    task : el.task.toUpperCase()
                }
            })
        )
    }

    let markAsDone = (id) => {
        setTodo((prevTodo) =>
            prevTodo.map((el) => {
                if(el.id === id){
                     return {
                        ...el,
                    isDone : true
                }
                }else{
                    return el
                }
               
            })
        )
    }

   

    return(
        <div>
            <h2>Todo List</h2>
            <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodo} />
            <p><button onClick={addNewTask}>Add Task</button></p>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <hr />
             <h3> Task to do - </h3>
             <ul>
                {todo.map((todo) => (
                    <li key={todo.id}> 
                    <span style={todo.isDone ? {textDecorationLine: "line-through"} : {textDecorationLine: "none"}}>
                         {todo.task}
                          </span>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
             </ul>
            <button onClick={upperCaseAll}>UPPER CASE ALL</button>
          
        </div>
        
    )
}