import React from 'react';
import axios from 'axios';
import dividerImageDesktop from './images/pattern-divider-desktop.svg';
import dividerImageMobile from './images/pattern-divider-mobile.svg';
import dice from './images/icon-dice.svg';

function App() {

  const[quote, setQuote] = React.useState('');
  const[id, setId] = React.useState('');
  const [loading, setLoading] = React.useState(false);


  // effect hook for fetching the advice from api

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setQuote(response.data.slip.advice);
      setId(response.data.slip.id);
      setLoading(false);
    } catch (error) {
      alert("error: ", error);
    }
  };
  
  React.useEffect(()=>{
    fetchData();
  }, [])

  const handleClick = ()=>{
    setLoading(true);
    fetchData();
  }

  return (
    <div className="App">
      <div className="heading">{ loading ? "Loading.." : "ADVICE #"+id}</div>
      <p className="quote">{ loading? "..." : quote}</p>
      <img className="dividerMobile" src={dividerImageMobile}   alt="Divider"/>
      <img className="dividerDesktop" src={dividerImageDesktop} alt="Divider"/>
      <div className="dice-container"  onClick={handleClick}>
        <img className="dice" src={dice} alt="dice image"/>
      </div>
    </div>
  );
}

export default App;
