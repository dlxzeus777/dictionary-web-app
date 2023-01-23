import dictionary from '../images/dictionary.png'

const Welcome = ({handleClick}) => {


  return (
    <div className="welcome-container">
      <h1>Welcome to the Dictionary App</h1>
      <p>This app allows you to search for words and their meanings.</p>
      <button className="start-btn" onClick={handleClick}>Start Searching</button>
      <img src={dictionary} className='dictionary'/>
    </div>
  );
}

export default Welcome;