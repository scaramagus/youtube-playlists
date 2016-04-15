import React from 'react';
import ReactDOM from 'react-dom';

import VideoForm from '../form/components.jsx';
import VideoPlayer from '../player/components.jsx';


export default class AppRoot extends React.Component {
  render() {
    return (
      <div>
        <VideoPlayer />
        <VideoForm />
      </div>
    );
  }
}

AppRoot.propTypes = { videoId: React.PropTypes.string };
ReactDOM.render(<AppRoot />, document.getElementById('app'));