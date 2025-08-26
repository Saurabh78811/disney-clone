import React from 'react'
import image from '../assets/images/disney.png'
import boy from '../assets/images/boy.png'
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import {HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderList from './HeaderLists';
import { useState } from 'react';

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const menu = [
        {
            name:"Home",
            icon:HiHome
        },
        {
            name:"Search",
            icon:HiMagnifyingGlass
        },
        {
            name:"Watchlist",
            icon:HiPlus
        },
        {
            name:"Originals",
            icon:HiStar
        },
        {
            name:"Movies",
            icon:HiPlayCircle
        },
        {
            name:"Services",
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center gap-10 p-4 justify-between'>
      <div className='flex items-center gap-8'>
        <img src={image} alt="Logo" className='w-[80px] md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
          {menu.map((item) => (
            <HeaderList name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className='flex md:hidden gap-2'>
          {menu.map((item,index) => index<3&& (
            <HeaderList name={''} Icon={item.icon} />
          ))}
          <div className='md:hidden ' onClick={() => setToggleMenu(!toggleMenu)}>
            <HeaderList name={''} Icon={HiDotsVertical} />
           {toggleMenu? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3'>
                {menu.map((item,index) => index>2&& (
            <HeaderList name={item.name} Icon={item.icon} />
          ))}
            </div> : null}
        </div>
        </div>
      </div>
      <img src={boy} alt="Logo" className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header
