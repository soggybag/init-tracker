import { NEW_PLAYER } from '../actions'
import PC from './PC'

const playerReducer = (state = [], action) => {
	const { type, payload } = action
	switch(type) {
		case NEW_PLAYER: 
			const newPlayer = new PC(payload.name, payload.dex, payload.init)
			return [...state, newPlayer]

		default: 
			return state
	}
}

export default playerReducer