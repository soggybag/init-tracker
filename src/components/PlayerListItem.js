import React from 'react'

export default function PlayerListItem({ index, data }) {
	const { name, dex, init } = data
	return (
		<div>
			<span>{index} </span> 
			<span>{name} </span> s
			<span>{dex} </span> 
			<span>{init}</span>
		</div>
	)
}