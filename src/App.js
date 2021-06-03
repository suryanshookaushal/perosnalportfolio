import { useState } from 'react';
import './App.css';
import Content from './components/Main/Content'
import Summary from './components/UI/Summary'

function App() {
  const [showb, setshowb] = useState(false)
  const showHandler = ()=>{
    setshowb(true)
  }
  const hideHandler = ()=>{
    setshowb(false)
  }
  return (
    <div className="App">
      {showb && <Summary hide={hideHandler}/>}
      <Content show={showHandler}/>
    </div>
  );
}

export default App;
