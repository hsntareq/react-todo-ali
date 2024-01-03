import React from 'react';

import './App.css';
import './TodoMain.css';

import NoTodos from './components/NoTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
	const [todos, setTodos] = useLocalStorage('todos',[]);
	const [todoId, setTodoId] = useLocalStorage('idForTodo',1);

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
	function cancelEditing(id){
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
	function clearAllTodos(){
		setTodos([]);
		localStorage.setItem('idForTodo',1);
	}
	return (
	  <div>
		<div className="App">
		<div className="container">
			<TodoForm addTodo={addTodo}/>

			{todos.length > 0 ? (
			<TodoList todos={todos} completeTodo={completeTodo} updateTodo={updateTodo} markAsEditing={markAsEditing} cancelEditing={cancelEditing} deleteTodo={deleteTodo} remainingItems={remainingItems} todoFiltered={todoFiltered} checkAll={checkAll} uncheckAll={uncheckAll} clearAllTodos={clearAllTodos}/>
			) : (
				<NoTodos/>
			)}
		</div>
		</div>
	  </div>
	);
}
