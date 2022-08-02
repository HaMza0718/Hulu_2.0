import React from 'react';

function Logo({Icon, title}) {
  return (
      <div className="flex flex-col items-center cursor-pointer w-12
      sm:w20 hover:text-white hover:animate-bounce ease-in-out transform">
          <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
          <p className="tracking-widest">{ title }</p>
    </div>
  )
}

export default Logo;