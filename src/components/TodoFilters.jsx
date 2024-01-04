import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext';

export default function TodoFilters(props) {
	const {setFilter,todoFiltered} = useContext(TodosContext);
  return (
	<div>
		<div className='flex-buttons'>
			<button className="filter-btn" onClick={() => {
				setFilter('all');
				todoFiltered();
			}}>All</button>

			<button className="filter-btn" onClick={() => {
				setFilter('active');
				todoFiltered();
			}} >Active</button>

			<button className="filter-btn" onClick={() => {
				setFilter('completed');
				todoFiltered();
			}}>Completed</button>
		</div>
	</div>
  )
}

