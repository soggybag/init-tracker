import React from 'react'
import { useDispatch } from 'react-redux'
import { selectEncounter } from '../actions'

export default function EncounterItem(props) {
	const dispatch = useDispatch()
	const { name, monsters, selected, index } = props
	const count = monsters.length
	return (
		<div 
			onClick={() => dispatch(selectEncounter(index))}
		>{name} ({count}) {selected && '*'}</div>
	)
}
