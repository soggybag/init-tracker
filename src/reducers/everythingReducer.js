import { NEW_ENCOUNTER, NEW_MONSTER, NEW_PLAYER, ADD_MONSTER, SELECT_ENCOUNTER, ROLL_INIT } from '../actions'
import PC from './PC'
import Monster from './Monster'
import Encounter from './Encounter'

const defaultState = {
	players: [],
	monsters: [], 
	encounters: [], 
	selectedEncounter: null,
	initList: []
}

function random(n = 20) {
	return Math.floor(Math.random() * n) + 1
}

function abilityBonus(n) {
	return Math.floor((n - 10) / 2)
}

const everythingReducer = (state = defaultState, { type, payload }) => {
	switch(type) {
		case NEW_PLAYER:
			const newPlayer = new PC(payload.name, payload.dex, payload.init)
			return { ...state, players: [...state.players, newPlayer] }

		case NEW_MONSTER: 
			const newMonster = new Monster(payload.name, payload.dex, payload.init)
			return {...state, monsters: [...state.monsters, newMonster] }

		case NEW_ENCOUNTER: 
			return {...state, encounters: [...state.encounters, new Encounter(payload.name)] }
		
		case ADD_MONSTER:
			if (state.selectedEncounter === null) { return state }
			const newState = { ...state, encounters: [...state.encounters] }
			newState.encounters[state.selectedEncounter].monsters.push(state.monsters[payload.monster])
			return newState

		case SELECT_ENCOUNTER:
			return { ...state, selectedEncounter: payload.index }

		case ROLL_INIT:
			if (state.selectedEncounter === null) { return state } 
			const initList = [...state.players, ...state.encounters[state.selectedEncounter].monsters].map((obj) => Object.assign({}, obj))
			initList.forEach((entity) => {
				const roll = random()
				const bonus = abilityBonus(entity.dex)
				const init = entity.init
				console.log('roll:', roll, 'bonus:', bonus, 'init:', init)
				entity.roll = roll + bonus + init
			})
			initList.sort((a, b) => a.roll > b.roll)
			console.log(initList)
			return {...state, initList}
	
		default: 
			return state
	}
}

export default everythingReducer