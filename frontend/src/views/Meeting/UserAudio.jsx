import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function UserAudio({ peer }) {
  const audioRef = useRef();

  useEffect(() => {
    if (!audioRef || !audioRef.current) {
      return;
    }
    if (peer.audio) {
      audioRef.current.srcObject = peer.audio.stream;
      audioRef.current.play();
    } else {
      audioRef.current.srcObject = null;
    }
  }, [peer.audio]);

  return (
    <audio
      ref={audioRef}
      controls={false}
      style={{
        width: 0,
        height: 0,
        visibility: 'hidden',
      }}
    />
  );
}

UserAudio.propTypes = {
  peer: PropTypes.object,
};

export default UserAudio;
