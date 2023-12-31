import React from 'react';
import { useState } from 'react';
import './TodoMain.css';

export default function TodoMain() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Learn React',
			isCompleted: false,
			isEditing: false,
		},
		{
			id: 2,
			title: 'Learn React Native',
			isCompleted: false,
			isEditing: false,
		},
		{
			id: 3,
			title: 'Learn React Hooks',
			isCompleted: false,
			isEditing: false,
		},
	]);

	const [todoInput, setTodoInput] = useState('');
	const [todoId, setTodoId] = useState(4);
	function handleInput(event){
		setTodoInput(event.target.value);
	}
	function addTodo(e) {
		e.preventDefault();
		if (todoInput.trim().length === 0) {
			return;
		}
		setTodos([
			...todos,
			{
				id: todoId,
				title: todoInput,
				isCompleted: false,
			},
		]);

		setTodoInput('');
		setTodoId(prevTodoId => prevTodoId + 1);
	}
	function deleteTodo (id) {
		setTodos([...todos].filter(todo => todo.id !== id));
	}
	function completeTodo(id){
		setTodos([...todos].map(todo => {
			if (todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
			}
			return todo;
		}));
	}
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
	function cancelEditing(event,id){
		setTodos([...todos].map(todo => {
			if (todo.id === id) {
				todo.isEditing = false;
			}
			return todo;
		}));
	}
	return (
	  <div>
		<div className="container">
		  <form action='#' onSubmit={addTodo} className="input-field">
			<input
			type="text"
			value={todoInput}
			onChange={handleInput}
			placeholder="Enter your new todo"/>
		  </form>

		  <ul className="todoLists">
			{todos.map((todo,index) => (
				<li key={todo.id} className="list pending">
					<input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.isCompleted ? true : false }/>
					<span>{todo.id}</span>

					{!todo.isEditing ?(
						<span
							onDoubleClick={() => markAsEditing(todo.id)}
							className="task">
								{todo.title}
							</span>
							) : (
							<input
							type="text"
							className="edit-input"
							defaultValue={todo.title}
							onBlur={(event) => updateTodo(event,todo.id)}
							onKeyDown={(event) => {
								if(event.key === 'Enter'){
									updateTodo(event,todo.id);
								}else if(event.key === 'Escape'){
									cancelEditing(event,todo.id);
								}
							}}
							/> )
					}

					<span className="task">{todo.isCompleted}</span>
					<button onClick={() => deleteTodo(todo.id)} className="uil uil-trash">icon</button>
				</li>
			))}
		  </ul>

		  <div className="pending-tasks">
			<span>You have <span className="pending-num"> no </span> tasks pending.</span>
			<button className="clear-button">Clear All</button>
			<button className="clear-button">Check All</button>
		  </div>
		</div>
	  </div>
	);
  }

