import { BsFillTrashFill } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
function FavoriteWords({ favorites, deleteFavorites, goToFavorites, theme }) {
    return (
        <>
            <div className='favorite-words-header'>
                <h3>Favorite Words</h3>
                <AiOutlineArrowLeft onClick={goToFavorites} className='go-back-btn' />
            </div>
            {favorites.length > 0 ? favorites.map((favorite, index) => {
                return (
                    <div className='favorite-words' key={index} style={{background: theme ? 'rgb(52 58 70)' : 'rgb(246 247 249)', boxShadow: 'inset 0 0 2px #000000'}}>
                        <div className='favorite-container'>
                            <div className='word-bin'>
                                <p className='favorite-word'>{favorite.favorite}</p>
                                <BsFillTrashFill onClick={() => deleteFavorites(favorite.id)} className='bin' />
                            </div>
                            <h4 className='meaning'>Meaning</h4>
                            <p>{favorite.meanings[0]}</p>
                        </div>
                    </div>
                )
            }) : <h5>You have zero favorite words. Add some!</h5>}

        </>
    )
}

export default FavoriteWords