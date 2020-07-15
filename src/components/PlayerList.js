import React from 'react'
import PlayerListItem from './PlayerListItem'

export default function PlayerList({ list }) {
	
	return (
		<div>
			{list.map((player, i) => {
				return (
					<PlayerListItem 
						key={`entity-${i}`} 
						index={i} 
						data={player} 
					/>
				)
			})}
		</div>
	)
}
