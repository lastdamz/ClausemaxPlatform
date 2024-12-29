import React, { useState } from 'react';
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { Link,useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { logoWhite } from '../assets'; 

const NavBar = ({tab, onSearch}) => {
  const [activeTab, setActiveTab] = useState(tab);
  const [isMenuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const [isSearchOpen, setSearchOpen] = useState(false); // State to control search input visibility
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate();

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
    setSearchQuery(''); // Clear search query when toggling
    setErrorMessage(''); // Clear error message when toggling
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setErrorMessage(''); // Clear error message when typing
    onSearch(query.trim()); // Pass the updated query to the parent
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setErrorMessage('Please enter a search term.');
    }
    // No need to handle search here; it's done in real-time with handleSearchChange
  };

  const clearSearch = () => {
    onSearch(''); // Pass an empty query to reset the display in Home
    setSearchOpen(!isSearchOpen);
    setSearchQuery(''); // Clear search query when toggling
    setErrorMessage(''); // Clear error message when toggling
  };


  return (
    <div className='relative w-full p-4 flex justify-between items-center h-32 z-10'>
      <Link
      to={'/'}>
      <img src={logoWhite} className="hidden md:block w-44 h-44 p-2" alt="Logo" />
      </Link>
     
      <div className="bg-nav border-[#6D6D6D] h-11  rounded-3xl w-1/2 border hidden md:flex justify-center items-center px-8 mx-auto">
        <div className="flex justify-center space-x-8">
          {tabs.map(({ name, path }) => (
            <Link
              to={path}
              key={name}
              className="relative cursor-pointer text-white hover:scale-110 transition-all hover:text-buttonOrange"
              onClick={() => setActiveTab(name)}
            >
              {name}
              <span
                className={`block h-[2px] bg-buttonOrange transition-all duration-300 ${
                  activeTab === name ? 'w-full' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='relative flex flex-col items-center'>
        {isSearchOpen ? (
          <>
            <div className='flex items-center'>
            <input
              type="text"
              placeholder="Search..."
              className="bg-nav border border-[#6D6D6D] h-11 text-white rounded-md px-4 placeholder-gray-300"
              value={searchQuery}
              onChange={handleSearchChange} // Updated to call handleSearchChange
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(); // Optional: keep this if you want to support pressing Enter
                }
              }}
              />
              <div className='ml-2 bg-explore rounded-full w-12 h-12 p-2 flex items-center justify-center' onClick={clearSearch}>
                <IoMdClose className="text-white" size={22} />
              </div>
            </div>
            {errorMessage && (
              <div className="text-red-500 text-xs mt-1">{errorMessage}</div>
            )}
          </>
        ) : (
          <div className='bg-nav border border-[#6D6D6D] rounded-full w-10 h-10 p-2 md:flex hidden text-white  hover:scale-110 transition-all hover:text-buttonOrange' onClick={toggleSearch}>
            <IoMdSearch className="justify-center " size={24} />
          </div>
        )}
      </div>
      <div className='absolute right-4 bg-nav border border-[#6D6D6D] rounded-full w-10 h-10 flex p-2 md:hidden' onClick={toggleMenu}>
        <FiMenu className="justify-center text-white" size={24} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute right-2 top-16 bg-nav w-40 rounded-lg shadow-lg p-4 md:hidden font-poppins text-sm">
          <button onClick={toggleMenu} className="text-white absolute right-2">
            <FiX size={22} />
          </button>
          <div className="flex flex-col space-y-2">
            {tabs.map(({ name, path }) => (
              <Link
                to={path}
                key={name}
                className="block text-white hover:bg-gray-600 p-2 rounded"
                onClick={() => {
                  setActiveTab(name);
                  setMenuOpen(false); // Close menu on click
                }}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;