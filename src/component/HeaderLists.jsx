import React from 'react'

function HeaderList({name,Icon}) {
  return (
    <div className='flex items-center gap-2 justify-center p-3 text-[15px] font-semibold cursor-pointer hover:underline hover:underline-offset-8 '>
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderList
