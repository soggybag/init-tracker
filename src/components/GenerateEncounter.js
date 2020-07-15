import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { rollInit } from '../actions'

export default function GenerateEncounter() {
	const dispatch = useDispatch()
	const initList = useSelector(state => state.tracker.initList)

	return (
		<div>
			<button
				onClick={() => {
					dispatch(rollInit())
				}}
			>Generate Encounter</button>
			{initList.length && initList.map((entity, i) => <div key={`entity-${i}`}>{entity.name} {entity.roll}</div>)}
		</div>
	)
}