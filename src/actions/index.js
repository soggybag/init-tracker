export const ADD_PLAYER = 'ADD_PLAYER'
export const ADD_MONSTER = 'ADD_MONSTER'
export const EDIT_PLAYER = 'EDIT_PLAYER'
export const EDIT_MONSTER = 'EDIT_MONSTER'
export const NEW_PLAYER = 'NEW_PLAYER'
export const NEW_MONSTER = 'NEW_MONSTER'
export const SELECT_ENCOUNTER = 'SELECT_ENCOUNTER'
export const NEW_ENCOUNTER = 'CREATE_ENCOUNTER_LIST'
export const ROLL_INIT = 'ROLL_INIT'

export const newPlayer = (name, init, dex) => {
	return {
		type: NEW_PLAYER,
		payload: { name, init, dex }
	}
}

export const newMonster = (name, init, dex) => {
	return {
		type: NEW_MONSTER,
		payload: { name, init, dex }
	}
}

export const newEncounter = (name) => {
	return {
		type: NEW_ENCOUNTER, 
		payload: { name }
	}
}

export const selectEncounter = (index) => {
	return {
		type: SELECT_ENCOUNTER, 
		payload: { index }
	}
}

export const addMonster = (monster) => {
	return {
		type: ADD_MONSTER,
		payload: { monster }
	}
}

export const rollInit = () => {
	return {
		type: ROLL_INIT
	}
}