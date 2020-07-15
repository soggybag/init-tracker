import React from 'react'
import { useDispatch } from 'react-redux'
import { addMonster } from '../actions'


export default function MonsterListItem({ index, data }) {
	const dispatch = useDispatch()
	const { name, dex, init } = data
	return (
		<div>
			<span>{index} </span> 
			<span>{name} </span> 
			<span>{dex} </span> 
			<span>{init} </span>
			<button
				className="add-to-encounter-button"
				onClick={() => dispatch(addMonster(index, data))}
			>✚</button>
		</div>
	)
}