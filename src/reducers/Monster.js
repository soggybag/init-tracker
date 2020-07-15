import Entity from './Entity'

export default class Monster extends Entity {
	constructor(name, dex, init, type) {
		super(name, dex, init, type)
		this.type = 'monster'
	}
}