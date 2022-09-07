import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import useAuth from '../hooks/useAuth'
import { useContext,useEffect, useState } from 'react'
import Link from 'next/link'
import BasicMenu from './BasicMenu'
// import Fuse from 'fuse-js-latest';
//jded
// import SearchComponent from '../pages/Search'
//jded
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://www.sunderlandbid.co.uk/sites/default/files/2019-08/Lights%20Out%20Logo_0.jpg"
          width={100}
          height={130}
          className="cursor-pointer object-contain"
        />

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">TV Shows</li>
          <Link href="/Movies">
          <li className="headerLink">Movies</li>
          </Link>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
          <Link href="/contact">
          <li className="headerLink">Contact Us</li>
          </Link>
        </ul>
      </div>
      
      <div className="flex items-center space-x-4 text-sm font-light">
        <Link href="/App">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline cursor-pointer rounded"/>
        </Link>
        
        {/* <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" /> */}
        <Link href="/account">
          <img
            src="https://ih1.redbubble.net/image.2155366154.3079/pp,840x830-pad,1000x1000,f8f8f8.jpg"
            alt=""
            width={35}
            height={35}
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}


export default Header 