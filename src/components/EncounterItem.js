import React from 'react'
import { useDispatch } from 'react-redux'
import { selectEncounter } from '../actions'
import './EncounterItem.css'

export default function EncounterItem(props) {
	const dispatch = useDispatch()
	const { name, monsters, selected, index } = props
	const count = monsters.length
	return (
		<div 
			className="EncounterItem"
			onClick={() => dispatch(selectEncounter(index))}
		>
			<label>
				<input 
					type="radio" 
					name="encounter" 
					checked={selected}
				/>
				{name} ({count})
			</label>
		</div>
	)
}
