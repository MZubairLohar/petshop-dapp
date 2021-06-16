import React, {useEffect} from 'react'
import './App.css';
import { initWeb3 } from './store/adoptSlice';
import {useDispatch, useSelector} from 'react-redux';
import List from './components/List';


function App() {
  const dispatch = useDispatch();
  
  useSelector((state)=>{
    console.log('check State = ', state);
    return state.adoptReducer.web3;
  });
  
  useEffect(() => {
    dispatch(initWeb3());
  },[])
  
  return (
    <div className="app">
      Hello main page 
      <List />
    </div>
    );
}

export default App;
