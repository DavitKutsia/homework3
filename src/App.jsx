import './App.css';
import { cards } from './data';
import Card from './components/card/Card';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleSubmit = () => {
    setSubmittedText(inputText);
    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={darkTheme ? 'app dark-theme' : 'app light-theme'}>
      <button className="theme" onClick={toggleTheme}>
        Toggle Dark/Light Theme
      </button>

      <div className='countDiv'>
        <h1 className='count'>{count}</h1>

        
        <button
          onClick={() => {
            setCount(count - 1);
          }}>
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          Increment
        </button>
      </div>
      

      {}
      <input 
        type="text" 
        placeholder='Type Here'
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
      /><br />
      <button className='Submit' onClick={handleSubmit}>Submit</button>

      {}
      {submittedText && <p className="submittedText">{submittedText}</p>}


      {cards.map(el => (
        <Card
          imgSrc={el.src}
          key={el.id}
          age={el.age}
          name={el.name}
          bg={el.bg}
          desc={el.desc}
        />
      ))}
    </div>
  );
}

export default App;
