import Header from './components/Header'
import Input from './components/Input';
import Main from './components/Main';
import Error from './components/Error';
import { useState, useEffect } from 'react';
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


  // FUNCTIONS

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

  const darkMode = () => {
    setTheme(prevTheme => !prevTheme)
  }

  const playAudio = (audio) => {
    new Audio(`${audio}`).play();
    console.log(audio)
  }

  const onChange = (e) => {
    setFontFamily(e.target.value)
  }

  const inputChange = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

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

  const statusBackToDefault = () =>
  {
    setTimeout(() =>
    {
      setStatus('')  
    }, 3000);
  }


  const addToFavorites = (word) => {
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
      setFavorites(current => [...current, { id: uuidv4(), favorite: word }])
    }
  }

  

  const deleteFavorites = (id) => {
    setFavorites(current => current.filter(item => {
      return item.id !== id
    }))
  }

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
            : <><Header onChange={onChange} darkMode={darkMode} theme={theme} handleClick={handleClick} goToFavorites={goToFavorites} />
              <Input inputChange={inputChange} OnSubmit={OnSubmit} />
              {isLoading
                ? <h1 className='loading'>Loading...</h1>
                : isOk ? <Main word={word} playAudio={playAudio} addToFavorites={addToFavorites} status={status} /> : <Error word={word} input={input} />}
            </>}
      </>


    </div>
  );
}

export default App;
