import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

import logo from '../../images/logo.png'

const NavbarItem=({title,classProps})=>{
    return(
        <li className={`mx-4 cursor-pointer hover:text-[#2952e3] transition-colors ${classProps}`}>
            {title}

        </li>
    )

}

const Navbar=()=>{
    const[toggleMenu,setToggleMenu]=useState(false)
    return(
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial gap-6">
                {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
                    <NavbarItem key={item+index} title={item} />
                ))}
                <li className="bg-[#2952e3] inline-flex items-center justify-center whitespace-nowrap py-2.5 px-8 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] transition-colors text-white font-medium text-sm overflow-hidden">
                    <span className="leading-none">Login</span>
                </li>

            </ul>
            <div className="flex relative md:hidden">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white cursor-pointer z-20 relative" onClick={()=>setToggleMenu(false)}/>
                    : <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer z-20 relative" onClick={()=>setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul className="fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in z-10">
                        <li className="text-xl w-full my-4 flex justify-end">
                            <AiOutlineClose fontSize={28} onClick={()=>setToggleMenu(false)} className="cursor-pointer" />
                        </li>
                        {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
                            <NavbarItem key={item+index} title={item} classProps="my-4 text-lg w-full text-right pr-4" />
                        ))}
                        <li className="bg-[#2952e3] inline-flex items-center justify-center whitespace-nowrap py-2.5 px-8 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] my-4 transition-colors text-white font-medium text-sm overflow-hidden">
                            <span className="leading-none">Login</span>
                        </li>
                    </ul>
                )}

            </div>


        </nav>

    )
    

}
export default Navbar