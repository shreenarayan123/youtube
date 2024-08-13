import React from 'react';
import moment from 'moment/moment';

const VideoLength = ({time}) => {
    const vidioLengthInSeconds =moment ()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return (
    <div className='absolute bottom-2 right-2 rounded-md px-2 py-1 bg-black text-white text-xs' >{vidioLengthInSeconds}</div>
  )
};

export default VideoLength