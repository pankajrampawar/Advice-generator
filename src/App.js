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
    <div className="bg-dark-blue h-screen w-screen flex justify-center items-center ">

      {/* this is the main box */}
      <div 
        className='bg-box md:h-80 md:w-box rounded-3xl shadow-xl flex flex-col justify-between items-center font-custom absolute w-box-sm h-box'>
        
          {/* Contains Advice Part */}
         <div 
          className="text-nn-green tracking-advice mt-9 text-xs">
            { loading ? "Loading.." : "ADVICE #"+id}
         </div>
         
          {/* contains quote */}
         <p 
          className="text-light-cyan text-quote mx-9 mt-9 text-center">
            { loading? "..." : '"'+ quote + '"'}
         </p>
         
          {/* Contains divider image for mobiel and desktop  */}

          <div className='flex-grow'></div>
          <img className="block sm:block md:hidden lg:hidden xl:hidden " src={dividerImageMobile} alt="Divider"/>
          <img className="hidden sm:hidden md:block lg:block xl:block " src={dividerImageDesktop} alt="Divider"/>
         
          {/* contains dice div and within it it's image */}
         <div 
          className="h-14 w-14 bg-nn-green flex justify-center items-center rounded-full relative top-7 mt-2"  
          onClick={handleClick}
         >
          <img className="dice" src={dice} alt="dice"/>
         </div>

      </div>
    </div>
  );
}

export default App;
