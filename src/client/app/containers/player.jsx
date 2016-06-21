import { connect } from 'react-redux';
import Youtube from '../components/player.jsx';

import { setPlayer, playCurrentVideo, playNextVideo } from '../actions/player.js';


const mapStateToProps = (state) => ({
  videoId: state.player.videoId,
});

const mapDispatchToProps = (dispatch) => ({
  onReady(event) {
    dispatch(setPlayer(event.target));
  },
  onStateChange(event) {
    const { data } = event;
    const { CUED, ENDED } = window.YT.PlayerState;

    if (data === CUED) {
      dispatch(playCurrentVideo());
    } else if (data === ENDED) {
      dispatch(playNextVideo());
    }
  },
});

const Player = connect(
  mapStateToProps,
  mapDispatchToProps
)(Youtube);

export default Player;
