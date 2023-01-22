import { AiOutlineSearch } from 'react-icons/ai'

function Input({ inputChange, OnSubmit }) {
    return (
        <>
            <form className='input-container' onSubmit={OnSubmit}>
                <input type='text' placeholder='e.g. keyboard' onChange={inputChange} />
                <button className='search-btn'>
                    <AiOutlineSearch />
                </button>
            </form>

        </>
    )
}

export default Input;