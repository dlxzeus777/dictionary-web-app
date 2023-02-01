import { AiOutlineSearch } from 'react-icons/ai'

function Input({ OnSubmit, inputRef, setInput }) {
    return (
        <>
            <form className='input-container' onSubmit={OnSubmit}>
                <input type='text' placeholder='e.g. keyboard' ref={inputRef} />
                <button className='search-btn' onClick={() => setInput(inputRef.current.value)}>
                    <AiOutlineSearch className='search-icon'/>
                </button>
            </form>

        </>
    )
}

export default Input;