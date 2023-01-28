import { CiDark } from 'react-icons/ci'
import { BsFillSunFill } from 'react-icons/bs'

function Menu({ onChange, darkMode, theme, goToFavorites }) {
    return (
        <>
            <div className='menu'>
                <h4 onClick={goToFavorites}>Favorites</h4>
                <select id="fonts" onChange={onChange}>
                    <option value="sans-serif">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                </select>
                <div onClick={darkMode}>
                    {theme ? <CiDark className='dark-icon' /> : <BsFillSunFill className='dark-icon' />}
                </div>
            </div>
        </>
    )
}

export default Menu;