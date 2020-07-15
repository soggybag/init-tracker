import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function NewEntity({ action, title }) {
	const [ name, setName ] = useState('')
	const [ dex, setDex ] = useState(10)
	const [ bonus, setBonus ] = useState(0)
	const dispatch = useDispatch()

	return (
		<form 
			className="new-entity-form"
			onSubmit={(e) => {
				e.preventDefault()
				if (name === '') {
					return
				}
				dispatch(action(name, parseInt(dex), parseInt(bonus)))
				setName('')
				setDex(10)
				setBonus(0)
			}}>

			<h2>{title}</h2>

			<input 
				className=""
				type='text'
				placeholder='name'
				value={name}
				onChange={e => setName(e.target.value)}
			/>

			<input 
				type='number'
				placeholder='Dex'
				value={dex}
				onChange={e => setDex(e.target.value)}
			/>

			<input 
				type='number'
				placeholder='init bonus'
				value={bonus}
				onChange={e => setBonus(e.target.value)}
			/>
			<button 
				type="submit"
			>✚</button>
		</form>
	)
}