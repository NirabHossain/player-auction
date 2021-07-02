// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playerInfo from './JSON/playerInfo.js';
import Player from './Components/Player/Player';
import MyTeam from './Components/MyTeam/MyTeam';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [players,setPlayer]=useState([]);
  const [team, makeTeam]=useState([]);
  
  useEffect(()=>{setPlayer(playerInfo);},[]);

  const teamHandler= (data)=>{makeTeam([...team, data]);}
  const buyingCost =  team.reduce((sum,player)=>parseFloat(player.auctionPrice)+sum,0)
  const totalSalary =  team.reduce((sum,player)=>player.salary+sum,0)

  return (
    <div className="App">
      <header className="App-header pt-3 pb-3">
        <h1 className='mb-3'>Team Bangladesh Cricket</h1>
        {team.map(player=><MyTeam teamPlayer={player}></MyTeam>)}
        <h3 className="mb-3 mt-3">Total Buying cost: {buyingCost.toFixed(3)} B</h3>
        <h3>Total salaries: {totalSalary} tk</h3>
      </header>

      <div className="container">
        {players.map(player =><Player player={player} teamHandler={teamHandler} key={player._id}></Player>)}
      </div>
    </div>
  );
}

export default App;
