import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import VideoLength from '../shared/videoLength';
import { BsFillCheckCircleFill } from "react-icons/bs";
const VideoCard = ({video}) => {



  return (
    <Link to={`/video/${video?.videoId}`}>
    <div className="flex flex-col w-[400px] mb-8">
      <div className="relative h-56 md:h-56 md:rounded-lg rounded-lg overflow-hidden">
        <img src={video?.thumbnails[0]?.url} className=" h-full w-full object-cover rounded-lg overflow-hidden" />
        {video?.lengthSeconds && (<VideoLength time={video.lengthSeconds}/>)}
      </div>
      <div className="flex text-black dark:text-white mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            <img  className="h-full w-full object-cover" src={video?.author?.avatar[0]?.url}  />
          </div>
        </div>
        <div className="flex  nl-3 flex-col overflow-hidden">
           <span className="text-sm  text-black dark:text-white font-bold line-clamp-2">
            {video?.title}
            
            </span>
            <span className='flex items-center font-semibold  gap-2 text-[15px] mt-2 text-black/[0.7] '> 
            {video?.author?.title}
            {video?.author?.badges[0]?.type ===
                                    "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill className="text-black/[0.7] text-[20px] lg:text-[10px] xl:text-[12px] " />
                                )}
            </span>
            <div className='flex text-[15px]  text-black/[0.7] truncate overflow-hidden'>
              <span>{`${abbreviateNumber(video?.stats?.views ,2)} views`}</span>  
              <span className='flex text-[24px] leading-none font-bold text-black/[0.5] relative top-[-10px] mx-1'>.</span>
              <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
        </div>

      </div>
    
      </div>
      </Link>

  )
}

export default VideoCard