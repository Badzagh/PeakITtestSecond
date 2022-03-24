import { Link } from 'react-router-dom';
import './SecondPopup.css'
import {ReactComponent as CloseLogo} from '../assets/Group 1.svg';

const SecondPopup = () => (
    <div className='second-popup'>
        <header>
            <h1>EARN BONUS POINTS.</h1>
            <Link to="/tier"><CloseLogo alt="close logo"/></Link>
        </header>
        <section>
            <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </section>
    </div>
);

export default SecondPopup;