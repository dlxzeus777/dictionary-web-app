import { CiDark } from 'react-icons/ci'
import { BsFillSunFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImBooks } from 'react-icons/im'
import { RiCloseFill } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'

function Header({ onChange, theme, darkMode, handleClick, openNav, openNavBar, options, fontFamily, goToFavorites }) {

    return (
        <>
            <div className='header-container' style={{borderBottom: openNavBar ? '0' : '1px solid var(--grey-color)'}}>
                <div className='logo'>
                    <ImBooks />
                    <h6 className='brand-name' onClick={handleClick}>Word<span className='purple'>Wizard</span></h6>
                </div>
                <AiOutlineHeart className='heart' onClick={goToFavorites}/>
                <div className='font-and-theme'>
                    <select
                        id="fonts"
                        onChange={onChange}
                        defaultValue={fontFamily}
                    >
                        {options.map((option, idx) => (
                            <option key={idx}>{option}</option>
                        ))}
                    </select>
                    <div className='theme-and-icon' onClick={darkMode}>
                        {theme ? <CiDark className='dark-icon' /> : <BsFillSunFill className='dark-icon' />}
                    </div>
                </div>
                {openNavBar ? <RiCloseFill className='hamburger-menu-icon close' onClick={openNav} /> : <GiHamburgerMenu className='hamburger-menu-icon' onClick={openNav} />}
            </div>
        </>
    )
}

export default Header;