import React from 'react'

export default function TodoCheckAll(props) {
  return (
	<div>
		<div className='flex-buttons'>
			<button onClick={() => props.checkAll()}>Check All</button>
			<button onClick={() => props.uncheckAll()}>Unheck All</button>
			<button onClick={() => props.clearAllTodos()}>Clear All</button>
		</div>
	</div>
  )
}

