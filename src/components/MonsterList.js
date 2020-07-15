import React from 'react'
import MonsterListItem from './MonsterListItem'

export default function MonsterList({ list }) {
	
	return (
		<div>
			{list.map((monster, i) => {
				return (
					<MonsterListItem 
						key={`monster-${i}`} 
						index={i} 
						data={monster} 
					/>
				)
			})}
		</div>
	)
}
