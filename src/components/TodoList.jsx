import React,{useState} from 'react';
import PropsType from 'prop-types';
import TodoRemainingItems from './TodoRemainingItems';
import TodoFilters from './TodoFilters';
import useToggle from '../hooks/useToggle';
import TodoCheck from './TodoCheck';

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
	const [oneFeatureVisible,setOneFeatureVisible] = useToggle();
	const [twoFeatureVisible,setTwoFeatureVisible] = useToggle();
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
						<button onClick={() => props.deleteTodo(todo.id)} className="delete-button">icon</button>
					</li>
				))}
			</ul>
			<div className='flex-buttons'>
					<button onClick={setOneFeatureVisible}>Toggle One</button>
					<button onClick={setTwoFeatureVisible}>Toggle Two</button>
				</div>
			<div>
				{oneFeatureVisible &&
					<TodoRemainingItems remainingItems={props.remainingItems} />
				}

				{twoFeatureVisible &&
				<>
					<TodoFilters todoFiltered={props.todoFiltered} filter={filter} setFilter={setFilter}/>
					<TodoCheck checkAll={props.checkAll} uncheckAll={props.uncheckAll} clearCompleted={props.clearCompleted} clearAllTodos={props.clearAllTodos}/>
				</>
				}
			</div>
			</>
		</div>
	)
}
