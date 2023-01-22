import Header from './components/Header'
import Input from './components/Input';
import Main from './components/Main';
import Error from './components/Error';
import { useState, useEffect } from 'react';
import Welcome from './components/Welcome';

function App() {

  // STATES
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [word, setWord] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOk, setIsOk] = useState(true)
  const [input, setInput] = useState('')
  const [theme, setTheme] = useState(false)
  const [navigate, setNavigate] = useState(true);

  console.log(fontFamily)
  console.log(word)
  console.log(isLoading)
  console.log(isOk)
  console.log(input)
  console.log(theme)
  console.log(navigate)

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

  return (
    <div style={{ fontFamily: fontFamily }} className='container'>
      {navigate
        ?
        <Welcome handleClick={handleClick}/>
        :
        <>
          <Header onChange={onChange} darkMode={darkMode} theme={theme} handleClick={handleClick} />
          <Input inputChange={inputChange} OnSubmit={OnSubmit} />
          {isLoading
        ? <h1 className='loading'>Loading...</h1>
        : isOk ? <Main word={word} playAudio={playAudio} /> : <Error word={word} />}
        </>
      }

    </div>
  );
}

export default App;
