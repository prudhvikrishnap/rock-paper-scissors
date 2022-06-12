import './App.css';
import {GiStonePile} from 'react-icons/gi'
import {GiPapers} from 'react-icons/gi'
import {AiOutlineScissor} from'react-icons/ai'
import {BsChevronDoubleDown} from 'react-icons/bs'
import Result from './Result'


function App() {
  function game () {
    const moves=['Rock','Paper','Scissors']
    var player = document.getElementById('input').getAttribute('name');
    const computer = moves[Math.floor(Math.random()*moves.length)]
    try {
      if ((player==='Paper' && computer==='Rock' )|| (player==='Scissors' && computer==='Paper') || (player==='Rock' && computer==='Scissors')){
        alert('Player Won')
      } else if((computer==='Paper' && player==='Rock') || (computer==='Scissors' && player==='Paper' )|| (computer==='Rock' && player==='Scissors')){
        alert('You Lost')
      } else{
        alert('Draw')
      }
      
    } catch (error) {
      alert(error)
    }
    return(<Result/>)
    
  }
  return (
    <div className='Main'>
      <div className='App-header'>
        <h1>The Game of Rock, Paper and Scissors</h1>
        <BsChevronDoubleDown/>
        <a href='#game'>Play the Game</a>
      </div>
      <div className="App" id='game'>
      <div className='icons'>
      <button name='Rock' id='input' onClick={game}> <GiStonePile/> </button>
      <h2>ROCK</h2>
      </div>
      <div className='icons'>
      <button name='Paper' id='input' onClick={game}>  <GiPapers/></button>
      <h2>PAPER</h2>
      </div>
      <div className='icons'>
      <button name='Scissors' id='input' onClick={game}><AiOutlineScissor/></button>
      <h2>SCISSORS</h2>
      </div>
      </div>
    </div>
  );
}



export default App;
