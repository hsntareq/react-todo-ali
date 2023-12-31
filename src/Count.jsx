import React from 'react';
import { useState } from 'react';

export default function Count() {
const [count, setCount] = useState(0);
function increment() {
	setCount(prevCount => prevCount + 1);
}
function decrement() {
	setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount));
}
const mainDivStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '10px',
	color: 'red',
  	fontSize: '1.5em',
  	fontWeight: 'bold',
  	background: 'lightblue',
}
const buttonStyle = {
	background:'transparent',outline:'none',border:'1px solid yellow',fontSize:'1.5rem',padding:'1px 5px',width:'25%'
}
  return (
	<div>
		<h2>Count Component:</h2>
		<div style={mainDivStyle}>
			<button style={buttonStyle} onClick={decrement}>-</button>
			<div style={{width:'50%'}}>{count}</div>
			<button style={buttonStyle} onClick={increment}>+</button>
		</div>
	</div>
  )
}

