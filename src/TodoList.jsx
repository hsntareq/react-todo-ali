import React,{useState} from 'react';
import PropsType from 'prop-types';
import TodoRemainingItems from './TodoRemainingItems';
// import TodoClearCompleted from './TodoClearCompleted';
// import TodoCheckAll from './TodoCheckAll';
import TodoFilters from './TodoFilters';

TodoList.propTypes = {
	todos: PropsType.array,
	completeTodo: PropsType.func,
	markAsEditing: PropsType.func,
	updateTodo: PropsType.func,
	cancelEditing: PropsType.func,
	deleteTodo: PropsType.func,
	remainingItems: PropsType.func,
	clearCompleted: PropsType.func,
	checkAll: PropsType.func,
}

export default function TodoList(props) {
	const [filter,setFilter] = useState('all');
	return (
		<div>
			<>
			<ul className="todoLists">
				{props.todoFiltered(filter).map((todo,index) => (
					<li key={todo.id} className="list pending">
						<input type="checkbox" onChange={() => props.completeTodo(todo.id)} checked={todo.isCompleted ? true : false }/>
						<span>{todo.id}</span>

						{!todo.isEditing ?(
							<span
								onDoubleClick={() => props.markAsEditing(todo.id)}
								className="task">
									{todo.title}
								</span>
								) : (
								<input
								type="text"
								className="edit-input"
								defaultValue={todo.title}
								onBlur={(event) => props.updateTodo(event,todo.id)}
								onKeyDown={(event) => {
									if(event.key === 'Enter'){
										props.updateTodo(event,todo.id);
									}else if(event.key === 'Escape'){
										props.cancelEditing(event,todo.id);
									}
								}}
								/> )
						}

						<span className="task">{todo.isCompleted}</span>
						<button onClick={() => props.deleteTodo(todo.id)} className="uil uil-trash">icon</button>
					</li>
				))}
			</ul>

			<div className="pending-tasks">
				<TodoRemainingItems remainingItems={props.remainingItems} />

				{/* <TodoClearCompleted clearCompleted={props.clearCompleted}/> */}
				{/* {<TodoCheckAll checkAll={props.checkAll()}/>} */}

				<TodoFilters todoFiltered={props.todoFiltered} filter={filter} setFilter={setFilter}/>
			</div>
			</>
		</div>
	)
}
