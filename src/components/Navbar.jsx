import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Navbar() {
     const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <div className="py-12 px-10 md:px-14 lg:px-16 bg-slate-700 items-center flex justify-between">
            <Link className="text-3xl text-white font-bold "to="/" >START FRAMEWORK</Link>
            <FontAwesomeIcon icon={faBars} className="md:opacity-0 text-white text-2xl " onClick={()=>setIsOpen((prev)=>!prev)} />
            <ul className=" flex gap-12 text-white uppercase font-bold text-md  hidden md:flex ">
                <li><NavLink to="About">About</NavLink></li>
                <li><NavLink to="Portfolio">Portfolio</NavLink></li>
                <li><NavLink to="Contact">Contact</NavLink></li>
            </ul>
            </div>
        <div>
           {isOpen &&  <ul className=" flex  flex-col gap-2 text-white uppercase font-bold md:hidden bg-slate-700 py-8 px-8 ">
                <li><NavLink to="About">About</NavLink></li>
                <li><NavLink to="Portfolio">Portfolio</NavLink></li>
                <li><NavLink to="Contact">Contact</NavLink></li>
            </ul> }
        </div>        
        </>
    )
    
}