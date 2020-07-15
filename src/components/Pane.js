import React from 'react';
import { useSelector } from 'react-redux'
import NewEntity from './NewEntity'
import PlayerList from './PlayerList'
import AddEncounter from './AddEncounter'
import EncounterList from './EncountersList'
import GenerateEncounter from './GenerateEncounter'
import MonsterList from './MonsterList'

import { newPlayer, newMonster } from '../actions'

export default function Pane() {
	const players = useSelector(state => state.tracker.players)
	const monsters = useSelector(state => state.tracker.monsters)
	const selectedEncounter = useSelector(state => state.tracker.selectedEncounter)
	const encounters = useSelector(state => state.tracker.encounters)
	const encounter = encounters[selectedEncounter]

  return (
		<div className="App">
			<div>
				<NewEntity action={newPlayer} title="Add Player" />
				<PlayerList list={players} />
			</div>

			<div>
				<NewEntity action={newMonster} title="Add Monster" />
				<MonsterList list={monsters} />
			</div>
			
			<div>
				<AddEncounter title="Add Encounter" />
				<EncounterList /><h3>Current Encounter</h3>
				{
					encounter && <PlayerList list={encounter.monsters} />
				}
			</div>
			
			<div>
				<h2>Initiative List</h2>
				<GenerateEncounter />
			</div>
		</div>
  );
}

