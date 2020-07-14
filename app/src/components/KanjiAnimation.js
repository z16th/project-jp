import React, { useCallback, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
import './styles/KanjiAnimation.css'

const noop = () => {};

const KanjiAnimation = ({ name, width, height, onReset, onPause }) => {
  const svgRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const handleReset = useCallback(() => {
    if (svgRef.current) {
      svgRef.current.setCurrentTime(0);
    }
    onReset();
  }, [onReset]);

  const handlePause = useCallback(() => {
    setIsPaused((state) => !state);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;
    if (isPaused) {
      svgRef.current.pauseAnimations();
    } else {
      svgRef.current.unpauseAnimations();
    }
  }, [isPaused]);

  return (
    <div className="kanji-animation flex-center column">
       <Icon
        ref={svgRef}
        name={`0${name}-jlect`}
        onLoad={() => {
          if (svgRef.current) {
            svgRef.current.pauseAnimations();
            svgRef.current.setCurrentTime(0);
          }
        }}
      />
      <div className="controls">
        <div className='btn button flex-center noselect' onClick={handlePause}>
          {isPaused ? '⏵' : '⏸'}
        </div>
        <div className='btn button flex-center noselect' onClick={handleReset}>⟳</div>
      </div>
    </div>
  );
};

KanjiAnimation.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

KanjiAnimation.defaultProps = {
  onReset: noop,
  onPause: noop,
};

export default KanjiAnimation;