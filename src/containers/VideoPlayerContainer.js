import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {};

function mapDispatchtoProps(dispatch) {
  return {
    displayVideo: () => dispatch(changeVideo(video))
  }
}
function mapStatetoProps(state) {
  let {currentVideo} = state
  return (
    {currentVideo}
  )
}
VideoPlayerContainer = connect(mapStatetoProps, mapDispatchtoProps)(VideoPlayerContainer  )
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
