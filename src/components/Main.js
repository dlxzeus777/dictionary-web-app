import { AiFillPlayCircle } from 'react-icons/ai'
import { GrShare } from 'react-icons/gr'

function Main({ word, playAudio }) {

    return (
        <>
            {word.map((item) => {
                const url = item.sourceUrls.map(url => {
                    return (
                        <a href={url} className='source-link' target='_blank' rel='noreferrer'><p>{url}</p> <GrShare className='source-icon' /></a>
                    )
                })
                const definitions = item.meanings.map(definition => {

                    return (
                        <>
                            <div className='noun'>
                                <h3>{definition.partOfSpeech}</h3>
                                <div className='line'></div>
                            </div>
                            <div className='meaning'>
                                <h4>Meaning</h4>
                                <ul className='meaning-list'>
                                    {definition.definitions.map(item => {
                                        return <li>{item.definition}</li>
                                    })}
                                </ul>
                            </div>
                            <div className='synonyms'>
                                {definition.synonyms.length > 0 &&
                                    <>
                                        <h3>Synonyms</h3>
                                        <div className='purple synonym'>{definition.synonyms.map(synonym => {
                                            return <p className='asd'>{synonym}</p>

                                        })}</div>
                                    </>
                                }

                            </div>
                        </>
                    )
                })
                return (
                    <>
                        <h1>{item.title}</h1>
                        <div className="heading">
                            <div className='spell'>
                                <h1>{item.word}</h1>
                                <div className='purple'>{item.phonetic}</div>
                            </div>
                            <div className='audio'>
                                {item.phonetics.map(text => {
                                    return text.audio ? <AiFillPlayCircle className='audio-icon' onClick={() => playAudio(text.audio)} /> : ''
                                })}
                            </div>
                        </div>
                        {definitions}
                        <div className='source'>
                            <h4 className='source-heading'>Source</h4>
                            {url}
                        </div>
                        <hr className='hr' />
                    </>
                )
            })}
        </>
    )
}

export default Main;