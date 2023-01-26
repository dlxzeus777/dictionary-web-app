import Header from './components/Header'
import Input from './components/Input';
import Main from './components/Main';
import Error from './components/Error';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Welcome from './components/Welcome';
import FavoriteWords from './components/FavoriteWords'

function App() {

  // STATES
  const [fontFamily, setFontFamily] = useState('sans-serif')
  const [word, setWord] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOk, setIsOk] = useState(true)
  const [input, setInput] = useState('')
  const [theme, setTheme] = useState(false)
  const [navigate, setNavigate] = useState(true)
  const [navigateToFavorites, setNavigateToFavorites] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [status, setStatus] = useState('')

  // UseRef for getting input value instead of onChange
  const inputRef = useRef(null)


  // FUNCTIONS

  // fetching data and returning the word.
  const OnSubmit = (e) => {
    e.preventDefault()
    const dataFetch = async () => {

      if (!input) return

      setIsLoading(true);
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
      const words = await response.json();

      !response.ok ? setIsOk(false) : setIsOk(true)

      setWord(words);
      setIsLoading(false)
    };

    dataFetch();
  }

  // Dark mode toggler function
  const darkMode = () => {
    setTheme(prevTheme => !prevTheme)
  }

  // Audio function
  const playAudio = (audio) => {
    new Audio(`${audio}`).play();
    console.log(audio)
  }

  //Setting the font family to the value the user chooses
  const onChange = (e) => {
    setFontFamily(e.target.value)
  }

  // input change could be done better with useRef
  // const inputChange = (e) => {
  //   setInput(e.target.value)
  //   console.log(input)
  // }

  // Navigating to front page
  const handleClick = () => {
    setNavigate(prevNavigation => !prevNavigation);
  }

  // USEEFFECT FOR THEME CHANGE

  useEffect(() => {
    if (theme) {
      document.body.style.background = 'black'
      document.body.style.color = 'white'
    }
    else {
      document.body.style.background = 'white'
      document.body.style.color = 'black'
    }
    return () => {
      // 👇️ optionally remove styles when component unmounts
      document.body.style.background = null;
      document.body.style.color = null;
    };
  }, [theme]);

  // Status text function
  const statusBackToDefault = () =>
  {
    setTimeout(() =>
    {
      setStatus('')  
    }, 3000);
  }


  // Adding words to favorites. And we're checking if its already in the array if its not the word gets added else it wont get added.
  const addToFavorites = (word, meanings) => {
    const favoriteWords = favorites.map(favorite => {
      return favorite.favorite
    })
    if (favoriteWords.includes(word))
    {
      setStatus(`${word} already in favorites`)
      statusBackToDefault()
      return
    }
    else
    {
      setStatus(`${word} added to favorites`)
      statusBackToDefault()
      setFavorites(current => [...current, { id: uuidv4(), favorite: word, meanings: meanings}])
    }
  }

  // Deleting favorites from array with filter
  const deleteFavorites = (id) => {
    setFavorites(current => current.filter(item => {
      return item.id !== id
    }))
  }

  // Navigating to favorites function. Didn't wanna add react routes
  const goToFavorites = () => {
    setNavigateToFavorites(current => !current)
  }

  return (
    <div style={{ fontFamily: fontFamily }} className='container'>
      <>
        {navigateToFavorites
          ? <FavoriteWords favorites={favorites} deleteFavorites={deleteFavorites} goToFavorites={goToFavorites} />
          : navigate
            ? <Welcome handleClick={handleClick} />
            : <><Header onChange={onChange} darkMode={darkMode} theme={theme} handleClick={handleClick} goToFavorites={goToFavorites} navigateToFavorites={navigateToFavorites}/>
              <Input  OnSubmit={OnSubmit} inputRef={inputRef} setInput={setInput} />
              {isLoading
                ? <h1 className='loading'>Loading...</h1>
                : isOk ? <Main word={word} playAudio={playAudio} addToFavorites={addToFavorites} status={status} /> : <Error word={word} input={input} />}
            </>}
      </>


    </div>
  );
}

export default App;
