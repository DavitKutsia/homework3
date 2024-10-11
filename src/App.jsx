import './App.css';
import { cards } from './data';
import Card from './components/card/Card';

function App() {
  return (
    <div>
      {cards.map((el) => (
        <Card 
          imgSrc={el.scr}
          key={el.id}
          name={el.name}
          age={el.age}
          bg={el.bg}
          desc={el.desc}
        />
      ))}
    </div>
  );
}

export default App;
