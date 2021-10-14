import React from 'react'
import { useDispatch } from 'react-redux'
import { addMonster } from '../actions'
import './MonsterListItem.css'

export default function MonsterListItem({ index, data }) {
	const dispatch = useDispatch()
	const { name, dex, init } = data
	return (
		<div className="MonsterListItem">
			<span>{index} </span> 
			<span>{name} </span> 
			<span>Dex:{dex} </span> 
			<span>Bonus:{init} </span>
			<button
				className="add-to-encounter-button"
				onClick={() => dispatch(addMonster(index, data))}
			>✚</button>
		</div>
	)
}