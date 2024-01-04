import React,{useContext} from 'react';
import { TodosContext } from '../context/TodosContext';
import TodoCheck from './TodoCheck';
import TodoFilters from './TodoFilters';

export default function TodoList() {
	const {todos,setTodos,todoFiltered} = useContext(TodosContext);

	function markAsEditing(id){
		setTodos([...todos].map(todo => {
			if (todo.id === id) {
				todo.isEditing = true;
			}
			return todo;
		}));
	}
	function updateTodo(event,id){
		setTodos([...todos].map(todo => {
			if (todo.id === id) {
				if(event.target.value.trim().length === 0){
					todo.isEditing = false;
					return todo;
				}

				todo.title = event.target.value;
				todo.isEditing = false;
			}
			return todo;
		}));
	}
	function cancelEditing(id){
		setTodos([...todos].map(todo => {
			if (todo.id === id) {
				todo.isEditing = false;
			}
			return todo;
		}));
	}
	function completeTodo(id){
		setTodos([...todos].map(todo => {
			if (todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
			}
			return todo;
		}));
	}
	function deleteTodo (id) {
		setTodos([...todos].filter(todo => todo.id !== id));
	}
	return (
		<div>
			<TodoFilters/>
			<>
			<ul className="todoLists">
				{todoFiltered().map((todo,index) => (
					<li key={todo.id} className="list pending">
						<input type="checkbox" onChange={()=>{completeTodo(todo.id)}} checked={todo.isCompleted ? true : false }/>

						<span>{todo.id}</span>

						{!todo.isEditing ?(
							<span
								onDoubleClick={() => {markAsEditing(todo.id)}}
								className="task">
									{todo.title}
								</span>
								) : (
								<input
								type="text"
								className="edit-input"
								defaultValue={todo.title}
								onBlur={(event) => {updateTodo(event,todo.id)}}
								onKeyDown={(event) => {
									if(event.key === 'Enter'){
										updateTodo(event,todo.id);
									}else if(event.key === 'Escape'){
										cancelEditing(todo.id);
									}
								}}
								/> )
						}
						<button onClick={() => deleteTodo(todo.id)} className="delete-button">icon</button>
					</li>
				))}
			</ul>
			<TodoCheck/>
			</>
		</div>
	)
}
