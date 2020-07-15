import Entity from './Entity'

export default class PC extends Entity {
	constructor(name, dex, init, type, playerName = '-') {
		super(name, dex, init, type)
		
		this.playerName = playerName
	}
}