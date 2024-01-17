import React from 'react'
import { useParams } from 'react-router-dom';

export default function Post() {
	const { id } = useParams();
  return (
	<div className='container'>This is Blog Post. It's ID is: {id} </div>
  )
}

