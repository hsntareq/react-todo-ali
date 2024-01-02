import React,{ useState } from 'react';
import './TodoMain.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoClearComplete from './TodoClearCompleted';
import TodoCheckAll from './TodoCheckAll';
import TodoUncheckAll from './TodoUncheckAll';

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

	const [todoId, setTodoId] = useState(4);
	function addTodo(todo) {
		setTodos([
			...todos,
			{
				id: todoId,
				title: todo,
				isCompleted: false,
			},
		]);
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
	function remainingItems(){
		return todos.filter(todo => !todo.isCompleted).length;
	}
	function clearCompleted(){
		setTodos([...todos].filter(todo => !todo.isCompleted));
	}
	function checkAll(){
		const allComplete = todos.map(todo => {
			todo.isCompleted = true;
			return todo;
		});
		setTodos(allComplete);
	}
	function uncheckAll(){
		const allComplete = todos.map(todo => {
			todo.isCompleted = false;
			return todo;
		});
		setTodos(allComplete);
	}
	function todoFiltered(filter){
		if(filter === 'all'){
			return todos;
		}else if(filter === 'active'){
			return todos.filter(todo => !todo.isCompleted);
		}else if(filter === 'completed'){
			return todos.filter(todo => todo.isCompleted);
		}
	}
	return (
	  <div>
		<div className="container">
			<TodoForm addTodo={addTodo}/>

			{todos.length > 0 ? (
			<TodoList todos={todos} completeTodo={completeTodo} updateTodo={updateTodo} markAsEditing={markAsEditing} cancelEditing={cancelEditing} deleteTodo={deleteTodo} remainingItems={remainingItems} clearCompleted={clearCompleted} todoFiltered={todoFiltered}/>
			) : (
				<NoTodos/>
			)}
			<TodoCheckAll checkAll={checkAll}/>
			<TodoUncheckAll uncheckAll={uncheckAll}/>
			<TodoClearComplete clearCompleted={clearCompleted}/>
		</div>
	  </div>
	);
  }

