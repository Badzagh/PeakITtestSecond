import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  Box } from '@mui/material';
import FirstPopup from './modals/FirstPopup';
import SecondPopup from './modals/SecondPopup';
import Tier from './modals/Tier';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

 // const [randomJoke, setRandomJoke] = useState([]);
  //const [jokeList, setJokeList] = useState([]);
  //const [showError, setShowError] = useState(false);
  //let error = false;

  //
  useEffect(() => {
    //list jokes
    setTimeout(() => {
      //makeRequestJokeList({setJokeList}, )
    }, 10)
  }, [])

  ////add joke
      

  const handleClickGenerate = (e) => {
  
    e.preventDefault();
    //ganarate random joke
    //makeRequestRandomJoke({setRandomJoke})
  }

  const [index, setIndex] = useState('');
  const [answerRight, setAnswerRight] = useState(false);
  const [answerWrong, setAnswerWrong] = useState(false);
  

  //

  return (
    <Router>
        <div>
          <>
            <Routes>
              <Route exact path="/" element={<FirstPopup />} />
              <Route path="/second-popup" element={<SecondPopup />}/>
              <Route path="/tier" element={<Tier index={index} setIndex={setIndex} answerRight={answerRight} setAnswerRight={setAnswerRight} answerWrong={answerWrong} setAnswerWrong={setAnswerWrong}/>}/>
            </Routes>
          </>
        </div>
    </Router>
  );
}


export default App;
