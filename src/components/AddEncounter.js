import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newEncounter } from '../actions'

export default function AddEncounter({ title }) {
	const [ name, setName ] = useState('')
	const dispatch = useDispatch()

	return (
		<form onSubmit={(e) => {
			e.preventDefault()
			if (name === '') {
				return
			}
			dispatch(newEncounter(name))
			setName('')
		}}>
			<h2>{title}</h2>
			<input 
				type="text"
				placeholder="Name"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<button>✚</button>
		</form>
	)
}