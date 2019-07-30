import React from 'react';
import PropTypes from 'prop-types';
import MainSlider from '../components/MainSlider';

const TravelContainer = ({
  playForward,
  moveBackward,
  moveForward,
  snapshotsLength,
  handleChangeSnapshot,
  handleJumpSnapshot,
  snapshotIndex,
  playing
}) => (
  <div className="travel-container">
    <div className="play-button" onClick={playForward}>
      { playing ? 'Pause': 'Play' }
    </div>
    <MainSlider
      snapshotLength={snapshotsLength}
      handleChangeSnapshot={handleChangeSnapshot}
      snapshotIndex={snapshotIndex}
      handleJumpSnapshot={handleJumpSnapshot}
    />
    <div className="backward-button" onClick={moveBackward}>
      {'<'}
    </div>
    <div className="forward-button" onClick={moveForward}>
      {'>'}
    </div>
  </div>
);

TravelContainer.propTypes = {
  playForward: PropTypes.func.isRequired,
  moveBackward: PropTypes.func.isRequired,
  moveForward: PropTypes.func.isRequired,
  snapshotsLength: PropTypes.number.isRequired,
  handleChangeSnapshot: PropTypes.func.isRequired,
  handleJumpSnapshot: PropTypes.func.isRequired,
  snapshotIndex: PropTypes.number.isRequired,
};
export default TravelContainer;
