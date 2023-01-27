import { BiBook } from 'react-icons/bi'
import { CiDark } from 'react-icons/ci'
import { BsFillSunFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

function Header({ onChange, theme, darkMode, handleClick, goToFavorites, navigateToFavorites }) {

    return (
        <>
        <div className='header-container'>
            <div className='logo'>
                <BiBook  onClick={handleClick} className='book'/>
                </div>

            <div className='font-and-theme'>
                <select id="fonts" onChange={onChange}>
                    <option value="sans-serif">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                </select>
                <div className='theme-and-icon' onClick={darkMode}>
                    {theme ? <CiDark className='dark-icon' /> : <BsFillSunFill className='dark-icon' />}
                </div>
            </div>
        </div>
        <div className='bottom-header' onClick={goToFavorites}>
            <p>Favorites</p>
            <AiFillHeart className='purple'/>
        </div>
        </>
    )
}

export default Header;