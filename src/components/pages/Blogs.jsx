import React from 'react'
import { Link } from 'react-router-dom'

export default function Blogs() {
  return (
	<ul className='container' style={{listStyle:'none'}}>
		<li><Link to='/blog/1'>Blog Post 1</Link></li>
		<li><Link to='/blog/2'>Blog Post 2</Link></li>
		<li><Link to='/blog/3'>Blog Post 3</Link></li>
		<li><Link to='/blog/4'>Blog Post 4</Link></li>
	</ul>
  )
}

