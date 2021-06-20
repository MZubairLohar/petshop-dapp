import React, {useEffect} from 'react'
import './App.css';
import { initWeb3 } from './store/adoptSlice';
import {useDispatch, useSelector} from 'react-redux';
import List from './components/List';
import perlogo from './components/logo/dog.jpg';

function App() {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  
  useSelector((state)=>{
    console.log('check State = ', state);
    return state.adoptReducer.web3;
  });
  
  // eslint-disable-next-line
  useEffect(() => {
    dispatch(initWeb3());
  },[])
  
  return (
    <div className="app">
      <div className='header'>
          <img src={perlogo} alt='logo' />
          <h1>React Dapp Pet shop</h1> 
      </div>
        <br/>
      <List />
    </div>
    );
}

export default App;
