const Welcome = ({handleClick}) => {


  return (
    <div className="welcome-container">
      <h1>Welcome to the Dictionary App</h1>
      <p>This app allows you to search for words and their meanings.</p>
      <button className="start-btn" onClick={handleClick}>Start Searching</button>
    </div>
  );
}

export default Welcome;