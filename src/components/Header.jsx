import React, { useContext } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import {createContext,useEffect,useState} from "react";




import ytLogo from '../assets/yt-logo.png';
import ytLogoMobile from '../assets/yt-logo-mobile.png';
import LeftNav from './LeftNav';
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { ColorRing } from 'react-loader-spinner';
import { Context } from '../context/contextapi';
import Loader from '../shared/Loader';




const Header = () => {
    const [searchQuery, setSearchQuery]=useState("");
     
    const {loading,mobileMenu,setMobileMenu} =useContext(Context);
    const navigate=useNavigate();
    const searchQueryHandler=(e)=>{
        if(
            (e?.key==="Enter" || e==="searchButton")&& searchQuery?.length>0){
                navigate(`/searchResult/${searchQuery}`);
            };
    };
     const mobMenuToggle=()=>{
        setMobileMenu(!mobileMenu);
        
     };
     const {pathname}=useLocation();
     const pageName=pathname?.split("/")?.filter(Boolean)?.[0]

  return (
    <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-5 md:px-5 bg-white dark:bg-black'>
        {loading && <Loader/>}
        <div className='flex h-5 items-center  '>
            {pageName!== "video"&&(
                <div className='flex md:hidden md:mr-0 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.5]' onClick={mobMenuToggle}>
                  {mobileMenu?(
                    <CgClose className='text-black dark:text-white text-xl'/>
                  ):(
                    <SlMenu className='text-black dark:text-white text-xl'/>
                  )
                }  </div>
            )}
            <Link to="/" className='flex h-5 items-center'>
              
            <div className='h-5 items-center text-black dark:text-white text-xl font-bold flex md:hidden'><img className='h-full block md:hidden' src={ytLogoMobile} alt='youtube' /> YouTube</div>
            <div className=' h-5 items-center text-black dark:text-white text-xl font-bold hidden md:flex'><img className='h-full hidden md:block' src={ytLogoMobile} alt='youtube' />YouTube</div>
            </Link>
            
        </div>
        <div className=' group flex items-center'> 
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
        <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="text-black dark:text-black text-xl" />
                    </div>
                <input
                        type="text"
                        className="bg-transparent outline-none text-black dark:text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="Search"
                        value={searchQuery}
                    />
              </div>
              <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]' onClick={() => searchQueryHandler("searchButton")}>
                <IoIosSearch className='text-black text-xl'/></button>
            </div> 
            <div className='flex items-center'>
              <div className='hidden md:flex'>
              <div className='flex items-center justify-center h-10 w-10 rounded-full hover:[#303030]/[0.6]'>
                  <RiVideoAddLine className ="text-black text-xl cursor-pointer"/>
                </div>
                <div className='flex items-center justify-center h-10 w-10 rounded-full hover:[#303030]/[0.6]'>
                  <FiBell className ="text-black text-xl cursor-pointer"/>
                </div>
                <div className='flex  h-8 w-8 overflow-hidden rounded-full md:ml-4'>
                  <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
                </div>
                
              </div>
            </div>
     </div>
           
             
  ) 
}

export default Header