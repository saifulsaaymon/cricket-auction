import './App.css';
import CricketersList from './FakeData/FakeData.json';
import { useEffect, useState } from 'react';
import Crickter from './components/Crickter/Crickter';
import Information from './components/Information/Information';


function App() {
  const [cricketer, setCrickter] = useState([]);
  const [buy, setBuy] = useState([]);
  const [information, setInformation] = useState([]);

  useEffect(() => {
    setCrickter( CricketersList)}, [])

  const handleBuyMe = (cricket) => {
    const newBuy = [...buy, cricket];
    setBuy(newBuy);
  }
  
  useEffect(() => {
    const newInformation = [...buy];
    setInformation(newInformation)}, [])
  
  return (
    <div className="App">
      <h1>Cricketers: {cricketer.length}</h1>
      <h4>Crickter Added : {buy.length} </h4>
      <Information information = {information.length}></Information>
      <ul>
        {
          CricketersList.map(cricket => <Crickter cricket={cricket} handleBuyMe = {handleBuyMe} key={cricket.id}></Crickter>)
        }
      </ul>
      
    </div>
  );
}

export default App;
