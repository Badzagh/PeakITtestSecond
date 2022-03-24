import { Link } from 'react-router-dom';
import './Tier.css'
import {ReactComponent as CloseLogo} from '../assets/Group 1.svg';
import {ReactComponent as LayerLogo} from '../assets/Layer_2.svg';
import {ReactComponent as BackgroundLogo} from '../assets/Background.svg';
import { useState } from "react";

const Tier = ({index, setIndex, answerRight, setAnswerRight, answerWrong, setAnswerWrong}) => (

    

    <div className='tier'>
        <header>
            <h1>*NEW TIER!*</h1>
            <Link to="/"><CloseLogo /></Link>
        </header>
        <section>
            <h2>How old nights are for Gold Silver?</h2>
            <div>
            
                <span onClick={(e) => {setAnswerWrong(true); e.target.style.backgroundColor = "gray"; setTimeout(() => {window.location.reload()},3000)}}></span>

                
                <span onClick={(e) => {setAnswerRight(true); e.target.style.backgroundColor = "#e8542c"; setTimeout(() => {window.location.reload()},3000)}}></span>
                
            
                <span onClick={(e) => {setAnswerWrong(true); e.target.style.backgroundColor = "gray"; setTimeout(() => {window.location.reload()},3000)}}></span>
                
                
                
            </div>
            <div>
                <label>15</label>
                <label>20</label>
                <label>30</label>
            </div>
            {answerWrong &&
                <LayerLogo className='try-again'/>
            }
            {answerRight &&
                <BackgroundLogo className='try-again'/>
            }
        
            <h3>TRY AGAIN</h3>
        </section>
    </div>
);

export default Tier;