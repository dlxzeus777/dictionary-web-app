import { BiBook } from 'react-icons/bi'
import { CiDark } from 'react-icons/ci'
import { BsFillSunFill } from 'react-icons/bs'

function Header({ onChange, theme, darkMode, handleClick }) {

    return (
        <div className='header-container'>
            <BiBook className='logo' onClick={handleClick}/>
            <div className='font-and-theme'>
                <select id="fonts" onChange={onChange}>
                    <option value="sans-serif">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                </select>
                <div className='theme-and-icon' onClick={darkMode}>
                    {theme ? <CiDark className='dark-icon'/> : <BsFillSunFill className='dark-icon'/>}
                </div>
            </div>
        </div>
    )
}

export default Header;