import dictionary from '../images/dictionary.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Welcome = ({ handleClick }) => {


  return (
    <div className="welcome-container">
      <h1>Welcome to <span className='word-wizard'>Word<span className='purple'>Wizard</span></span></h1>
      <p>This app allows you to search for words and their meanings.</p>
      <button className="start-btn" onClick={handleClick}>Start Searching <AiOutlineArrowRight className='arrow-right-icon'/></button>
      <img src={dictionary} className='dictionary' alt='dictionary' />
    </div>
  );
}

export default Welcome;