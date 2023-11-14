import React from 'react';
import axios from 'axios';
import dividerImageDesktop from './images/pattern-divider-desktop.svg';
import dividerImageMobile from './images/pattern-divider-mobile.svg';
import dice from './images/icon-dice.svg';

function App() {

  const[quote, setQuote] = React.useState('');
  const[id, setId] = React.useState('');

  // const response = await axios.get('https://api.adviceslip.com/advice');
  // console.log(response.data);
  
  async function fetchData() {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice')
      console.log(response);
      setQuote(response.data.slip.advice);
      setId(response.data.slip.id);
    } catch (error) {
      console.error("error: ", error);
    }
  }
  fetchData();

  const handleClick = ()=>{
    fetchData();
  }

  return (
    <div className="App">
      <div className="heading">ADVICE #{id}</div>
      <p className="quote">{quote}</p>
      <img className="dividerMobile" src={dividerImageMobile}/>
      <img className="dividerDesktop" src={dividerImageDesktop}/>
      <div className="dice-container"  onClick={handleClick}>
        <img className="dice" src={dice} alt='dice image'/>
      </div>
    </div>
  );
}

export default App;
