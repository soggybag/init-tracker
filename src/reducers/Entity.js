function random(n = 20) {
	return Math.floor(Math.random() * n) + 1
}

function abilityBonus(n) {
	return Math.floor(n - 10 / 2)
}

export default class Entity {
	constructor(name, dex, init, type) {
		this.name = name
		this.dex = dex 
		this.init = init
		this.type = type
		this.roll = 0
	}
}