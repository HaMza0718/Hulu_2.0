import React from 'react';
import Logo from './Logo';
import HeaderItem from './HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon,
  FilmIcon,
  HomeIcon, LightningBoltIcon, SearchIcon, UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between 
      items-center h-auto">
      <div className="flex flex-grow justify-between px-3 py-1 max-w-2xl">
        <HeaderItem title='Home' Icon={HomeIcon} />
        <HeaderItem title='Trending' Icon={LightningBoltIcon}/>
        <HeaderItem title='Verified' Icon={BadgeCheckIcon}/>
        <HeaderItem title='Collections' Icon={CollectionIcon}/>
        <HeaderItem title='Search' Icon={SearchIcon}/>
        <HeaderItem title='Account' Icon={UserIcon} />
      </div>
      <div className="px-10 whitespace-nowrap items-center animate-pulse">
        <Logo title='Hulu 2.0 🎬' Icon={FilmIcon} />
      </div>
    </header>
  )
}

export default Header;