
import { useState } from 'react';
import './App.css';
import { CardList } from "./components/index";

function App() {
  const [keyWord, setKeyWord] = useState(['morty'])
  return (
    <div className="App">
      <section className="App-content">
        <CardList keyWord={keyWord}/>
        <div className="c-contBtn">
          <button className="c-btn" onClick={()=>{setKeyWord('blackWidow')}}> Change list </button>
        </div>
      </section>
    </div>
  );
}

export default App;
