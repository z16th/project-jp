import React, { useCallback, useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import Icon from "./Icon"
import styled from "@emotion/styled"

const noop = () => {}

const minWidth = 280
const maxWidth = 800

const AnimationStyled = styled.div`
  svg {
    width: 100px;
    height: 100px;
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      width: calc(
        80px + (100 - 100) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
      height: calc(
        80px + (100 - 100) *
          ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
      );
    }
    @media (min-width: ${maxWidth}px) {
      width: 100px;
      height: 100px;
    }
  }
  button {
    display: none;
  }
`

const CharAnimation = ({ name, onReset, onPause }) => {
  const svgRef = useRef(null)
  const [isPaused, setIsPaused] = useState(true)

  const handleReset = useCallback(() => {
    if (svgRef.current) {
      svgRef.current.setCurrentTime(0)
    }
    onReset()
  }, [onReset])

  const handlePause = useCallback(() => {
    setIsPaused((state) => !state)
    onPause()
  }, [onPause])

  useEffect(() => {
    if (!svgRef.current) return
    if (isPaused) {
      svgRef.current.pauseAnimations()
    } else {
      svgRef.current.unpauseAnimations()
    }
  }, [isPaused])

  return (
    <AnimationStyled className="animation">
      <Icon
        ref={svgRef}
        name={`0${name}-jlect`}
        onLoad={() => {
          if (svgRef.current) {
            svgRef.current.pauseAnimations()
            svgRef.current.setCurrentTime(0)
          }
        }}
      />
      <div className="controls">
        <button className="play-pause" type="button" onClick={handlePause}>
          {isPaused ? "⏵" : "⏸"}
        </button>
        <button className="reset" type="button" onClick={handleReset}>
          ⟳
        </button>
      </div>
    </AnimationStyled>
  )
}

CharAnimation.propTypes = {
  name: PropTypes.string.isRequired,
  onPause: PropTypes.func,
  onReset: PropTypes.func,
}

CharAnimation.defaultProps = {
  onReset: noop,
  onPause: noop,
}

export default CharAnimation
