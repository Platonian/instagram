import React, { useState, useRef, useEffect } from 'react'
import { MdClose, MdSearch } from 'react-icons/md'


const SearchBar = () => {
    const [searchText, setSearchText] = useState()
    const [isSearchActive, setIsSearchActive] = useState(false)
    const ref = useRef(null);


    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }

    const closeSearch = () => {
        setSearchText('')
        setIsSearchActive(false)
    }

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsSearchActive(false)
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });


    return (
        <div 
        className="flex mx-6 h-8 items-center justify-center border border-gray-300 px-3 rounded">
            <MdSearch size={14} className="text-gray-400" />
            {<input 
                ref={ref}
                onClick={()=>setIsSearchActive(true)}
                className="px-2 text-sm text-gray-800 bg-transparent rounded-sm focus:outline-none antialiased"
                value={searchText} onChange={handleSearch}
                placeholder="Search"
            />}
            <MdClose onClick={closeSearch} className={`${isSearchActive? 'text-gray-400': 'text-transparent'}`}/>
        </div>
    )
}

export default SearchBar
