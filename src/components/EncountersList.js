import React from 'react'  
import { useSelector } from 'react-redux'
import EncounterItem from './EncounterItem'

export default function EncounterList() {
	const encounters = useSelector(state => state.tracker.encounters)
	const selectedEncounter = useSelector(state => state.tracker.selectedEncounter)

	return (
		<div>
			{encounters.map((encounter, i) => {
				const selected = i === selectedEncounter 
				return (
					<EncounterItem 
						selected={selected}
						key={`encounter-${i}`} 
						index={i} 
						{ ...encounter }
					/>
				)
			})}
		</div>
	)
}