import React from 'react'

const NavButton = ({text, onClick}) => {
  return (
     <div className=" border-[0.5px] border-gray-400 rounded-lg py-1 px-3 flex items-center">
                <button
                  type="submit"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]"
                  onClick = {onClick}
                >
                  {text}
                </button>
    </div>
  )
}

export default NavButton