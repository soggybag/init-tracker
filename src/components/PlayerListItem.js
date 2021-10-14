import React from 'react'
import './PlayerListItem.css'

export default function PlayerListItem({ index, data }) {
	const { name, dex, init } = data
	return (
		<div className="PlayerListItem">
			<span>{index} </span> 
			<span>{name} </span> s
			<span>{dex} </span> 
			<span>{init}</span>
		</div>
	)
}