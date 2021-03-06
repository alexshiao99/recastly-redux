import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { useDispatch } from 'react-redux';


var handleVideoSearch = (q) => {
  let options = {
    key: YOUTUBE_API_KEY,
    query: q
  };

  return (dispatch) => {
    searchYouTube(options, (videos) => dispatch(changeVideoList(videos)))
  }
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
