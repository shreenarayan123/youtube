import React, { useEffect, useState } from 'react';
import { Context } from '../context/contextapi';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { fetchDataFromApi } from '../utils/api';
import LeftNav from './LeftNav';
import ResultCard from './ResultCard';

const SearchResult = ({video}) => {

  const [result, setResult] = useState();
  const {searchQuery} = useParams();
  const  {setLoading} = useContext(Context);

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  },[searchQuery]);

  const fetchSearchResults = ()=>{
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
      console.log(res);
      setResult(res?.contents);
      setLoading(false);

    });
  };





  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
      <div className="w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
      <div className="grid grid-cols-1 gap-0 pt-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <ResultCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
      </div>
    </div>
  )
}

export default SearchResult