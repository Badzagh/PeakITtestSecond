import { Link } from 'react-router-dom';
import './FirstPopup.css'
import {ReactComponent as CloseLogo} from '../assets/Group 1.svg';
import {ReactComponent as Bigimg} from '../assets/_Clip Group_ (1).svg';

const FisrtPopup = () => (
    <div className='first-popup'>
        <header>
            <h1>CONFIRMABLE SUITE UPGRIDE</h1>
            <Link to="/second-popup"><CloseLogo alt="close logo"/></Link>
        </header>
        <section>
            <Bigimg alt="sleeping room"/>
            <div>
                <h2>ABCDEFG HGFASQWEQWR</h2>
            </div>
            <p>Life is suite as a Gold Elite.</p>
            <p>Our members told us they love being upgraded, so we delivered!</p>
            <ul>
                <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>
                <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</li>
                <li>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </li>
            </ul>
        </section>
    </div>
);

export default FisrtPopup;