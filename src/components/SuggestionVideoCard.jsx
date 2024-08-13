import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import VideoLength from '../shared/videoLength';
import { BsFillCheckCircleFill } from "react-icons/bs";

const SuggestionVideoCard = ({video}) => {
    return (
      <Link to={`/video/${video?.videoId}`}>
  <div className="flex gap-3 pb-2">
  <div className="relative h-28 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-lg bg-slate-800 overflow-hidden">
        <img src={video?.thumbnails[0]?.url} className=" h-full w-full object-cover" />
        {video?.lengthSeconds && (<VideoLength time={video.lengthSeconds}/>)}
      </div> 
      <div className="flex   flex-col overflow-hidden">
           <span className="text-sm  text-black dark:text-white font-bold line-clamp-2">
            {video?.title}
            
            </span>
            <span className='flex items-center font-semibold text-[12px] mt-1 gap-2 text-black/[0.7] '> 
             
             {video?.author?.title}
             {video?.author?.badges[0]?.type ===
                                     "VERIFIED_CHANNEL" && (
                                     <BsFillCheckCircleFill className="text-black/[0.7] text-[15px] lg:text-[10px] xl:text-[12px] " />
                                 )}
            
            </span>
            <div className='flex text-[12px]  text-black/[0.7] truncate overflow-hidden'>
              <span>{`${abbreviateNumber(video?.stats?.views ,2)}views`}</span>  
              <span className='flex text-[24px] leading-none font-bold text-black/[0.5] relative top-[-10px] mx-1'>.</span>
              <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
              
             
           
          
           
           <span className='text-sm line-clamp-2 text-black/[0.5] font-semibold empty:hidden '>
            {video?.descriptionSnippet}
           </span>

        </div>
  </div>
      </Link>
      )
    }
export default SuggestionVideoCard
