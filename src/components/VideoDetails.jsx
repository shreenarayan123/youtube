import React, { useContext, useEffect, useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { abbreviateNumber } from 'js-abbreviation-number';

import { fetchDataFromApi } from '../utils/api';
import { Context } from '../context/contextapi';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import SuggestionVideoCard from './SuggestionVideoCard';



const VideoDetails = () => {

  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const {id} =useParams();
  const { setLoading } =useContext(Context);

  useEffect(()=>{
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
    
  },[id]);

  
  const fetchVideoDetails = ()=>{
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res)=> {
      console.log(res)
      setVideo(res);
      setLoading(false);
    });
  };
  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
        console.log(res);
        setRelatedVideos(res);
        setLoading(false);
    });
};

 

  return (
    <div className='flex justify-center flex-row  h-[calc(100%-56px)] bg-white dark:bg-black'>
      <div className="flex w-[1000px]  flex-col lg:flex-row">
        <div className="flex flex-col rounded-xl px-4 py-3 w-[1000px]  lg:w-[100%-350px] xl:w-[100%-400px] lg:py-6 overflow-y-auto">
          <div className=" rounded-xl  md:h-[400px] lg:h-[600px] xl:[550px] ml-[16px] lg:ml-0 mr-[-16px] lg:mr-0 overflow-hidden ">
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
               controls
               width="100%"
               height="100%"
               style={{backgroundColor:"white"}} 
               playing={true}
            
            />
          </div>
          <div className="text-black dark:text-white font-bold text-sm line-clamp-2 mt-4 md:text-xl">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row  mt-4">
           
             <div className="flex">
             <div className="flex h-11 w-11 rounded-full overflow-hidden">
                <img  className='h-full w-full' src={video?.author.avatar[0]?.url} alt="img" />
              </div>

            
            <div className="flex flex-col ml-3">
            <div className="text-black dark:text-white text-md font-semibold flex items-center">
                                    {video?.author?.title}
                                    {video?.author?.badges[0]?.type ===
                                    "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill className="text-black/[0.7] text-[15px] lg:text-[10px] xl:text-[12px] " />
                                )}
                                </div>
              <div className="text-black/[0.7] text-sm">
                {video?.author?.stats?.subscribersText}
              </div>
            </div>
             </div>
         
          <div className="flex mt-4 md:mt-0">
            <div className="flex items-center h-11 px-6 rounded-3xl bg-black/[0.15]">
              <AiOutlineLike className='text-xl text-black dark:text-white mr-2'/>
              {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
            </div>
            <div className="flex items-center h-11 px-6 rounded-3xl bg-black/[0.15] ml-4">
            
              {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  py-6 px-4  lg:w-[350px] xl:w-[400px]">
        {relatedVideos?.contents.map((item, index)=>{
          if(item.type !== "video") return false;
          return(
            <SuggestionVideoCard key={index} video={item.video}/>
          );
        })}
      </div>
    </div>
  );
};

export default VideoDetails