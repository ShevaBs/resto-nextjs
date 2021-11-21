import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="fixed inset-x-0 z-50 h-20 flex items-center justify-between shadow-md bg-white">
      <div className="container-wrapper flex justify-between items-center">

        <Link href="/">
          <div className="flex items-center gap-1 cursor-pointer">
            <img className="w-[30px]" src="./images/logo.png" alt="logo" />
            <h1 className="text-2xl font-black text-primary">Resto.</h1>
          </div>
        </Link>
  
        <nav className={menuActive ? "nav nav_active" :"nav"}>
          <Link href='/'>
            <a className="nav-link">Home</a>
          </Link>
          <Link href='/dishes'>
            <a className="nav-link">Dishes</a>
          </Link>
          <Link href='/about'>
            <a className="nav-link">About</a>
          </Link>
          <Link href='/menu'>
            <a className="nav-link">Menu</a>
          </Link>
          <Link href='/review'>
            <a className="nav-link">Review</a>
          </Link>
          <Link href='/order'>
            <a className="nav-link">Order</a>
          </Link>
        </nav>
  
        <div className="flex gap-2">
          <div 
            className="header-icon hidden md:block"
            onClick={() => setMenuActive(!menuActive)}>
            { menuActive ? <CloseIcon /> : <MenuIcon/> }
          </div>
          <div className="header-icon">
            <SearchIcon />
          </div>
          <div className="header-icon">
            <FavoriteIcon />
          </div>
          <div className="header-icon">
            <ShoppingCartIcon/>
          </div>
        </div>

      </div>
    </header>
  )
}
