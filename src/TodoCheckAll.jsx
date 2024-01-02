import React from 'react'

export default function TodoCheckAll(props) {
  return (
	<div>
		<button onClick={() => props.checkAll()}>Check All</button>
	</div>
  )
}

