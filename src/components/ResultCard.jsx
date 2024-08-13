import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';

import VideoLength from '../shared/videoLength';
import { BsFillCheckCircleFill } from "react-icons/bs";



const ResultCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
  <div className="flex flex-row h-full  pt-3 gap-3">
  <div className="relative   md:h-52 md:rounded-xl overflow-hidden">
        <img src={video?.thumbnails[0]?.url} className=" h-full w-full object-cover" />
        {video?.lengthSeconds && (<VideoLength time={video.lengthSeconds}/>)}
      </div> 
      <div className="flex  nl-3 flex-col overflow-hidden">
           <span className="text-lg  text-black/[0.8] dark:text-white font-semibold line-clamp-2">
            {video?.title}
            
            </span>
            <div className='flex text-[12px]  text-black/[0.9] truncate overflow-hidden'>
              <span>{`${abbreviateNumber(video?.stats?.views ,2)} views`}</span>  
              <span className='flex text-[24px] leading-none font-bold text-black/[0.5] relative top-[-10px] mx-1'>.</span>
              <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
              
              <span className='flex items-center font-semibold text-[15px] mt-2 gap-2 text-black/[0.7] '> 
              
            <img  className="flex h-7 w-7 rounded-full overflow-hidden object-cover" src={video?.author?.avatar[0]?.url}  />
            {video?.author?.title}
            {video?.author?.badges[0]?.type ===
                                    "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill className="text-black/[0.7] text-[15px] lg:text-[10px] xl:text-[12px] " />
                                )}
           
           
           </span>
           
          
           
           <span className='text-sm line-clamp-2 text-black/[0.5] font-semibold empty:hidden '>
            {video?.descriptionSnippet}
           </span>

        </div>
  </div>
      </Link>
  )
}

export default ResultCard