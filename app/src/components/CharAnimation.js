/** @jsx jsx */
import { useCallback, useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import { charAnimation } from "../styling"
import Icon from "./Icon"

const noop = () => {}

const CharAnimation = ({ name, playOnLoad, onReset }) => {
  const svgRef = useRef(null)
  const [isPaused, setIsPaused] = useState(true)

  const handleReset = useCallback(() => {
    if (svgRef.current) {
      svgRef.current.setCurrentTime(0)
      setIsPaused(false)
    }
    onReset()
  }, [onReset])

  useEffect(() => {
    let timer
    if (playOnLoad) {
      timer = setTimeout(() => setIsPaused(false), 800)
    }
    return () => clearTimeout(timer)
  }, [playOnLoad])

  useEffect(() => {
    if (!svgRef.current) return
    if (isPaused) {
      svgRef.current.pauseAnimations()
    } else {
      svgRef.current.unpauseAnimations()
    }
  }, [isPaused])

  return (
    <div className="char animation" css={charAnimation}>
      <button className="reset" type="button" onClick={handleReset}>
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
      </button>
    </div>
  )
}

CharAnimation.propTypes = {
  name: PropTypes.string.isRequired,
  playOnLoad: PropTypes.bool,
  onReset: PropTypes.func,
}

CharAnimation.defaultProps = {
  playOnLoad: false,
  onReset: noop,
}

export default CharAnimation
