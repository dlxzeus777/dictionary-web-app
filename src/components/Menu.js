import { CiDark } from 'react-icons/ci'
import { BsFillSunFill } from 'react-icons/bs'
import { Select } from '@chakra-ui/react'

function Menu({ onChange, darkMode, theme, goToFavorites, options, fontFamily }) {
    return (
        <>
            <ul className='menu'>
                <li className='menu-items'><h4 onClick={goToFavorites}>Favorites</h4></li>
                <li className='menu-items'>          <Select
                    bg='var(--main-color)'
                    borderColor='var(--main-color)'
                    color='white'
                    id="fonts"
                    onChange={onChange}
                    defaultValue={fontFamily}
                >
                    {options.map((option, idx) => (
                        <option key={idx}>{option}</option>
                    ))}
                </Select></li>
                <li className='menu-items'><div onClick={darkMode}>
                    {theme ? <CiDark className='dark-icon' /> : <BsFillSunFill className='dark-icon' />}
                </div></li>
            </ul>
        </>
    )
}

export default Menu;