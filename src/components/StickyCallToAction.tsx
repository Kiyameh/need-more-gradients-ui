import React from 'react'
import {useState, useRef} from 'react'
import type {CommonComponentProps} from '../types/types'

type StickyCallToActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonComponentProps

function StickyCallToAction({
  roundness = 1,
  background = 'var(--surface-100)',
  firstGradient = 'var(--gradient-100)',
  secondGradient = 'var(--gradient-200)',
  thirdGradient = 'var(--gradient-300)',
  borderWidth = 1,
  children,
  style,
  ...props
}: StickyCallToActionProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setPosition({x: e.clientX - rect.left, y: e.clientY - rect.top})
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const handleMouseDown = () => {
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={ref}
      style={{
        background: isPressed
          ? `linear-gradient(to right, ${firstGradient}, ${secondGradient}, ${thirdGradient})`
          : isHovering
          ? 'var(--surface-300)'
          : background,
        color: isPressed ? 'white' : isHovering ? 'inherit' : 'inherit',
        borderRadius: `${roundness * 2}rem ${roundness * 2}rem 0 ${
          roundness * 2
        }rem`,
        paddingInline: `2rem`,
        paddingBlock: `0.8rem`,
        fontSize: '1.2rem',
        userSelect: 'none',
        cursor: 'pointer',
        border: 'none',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      {children}
      <div
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${firstGradient}, ${secondGradient}, ${thirdGradient}, transparent, transparent)`,
          transition: 'opacity 0.4s ease-in-out',
          opacity: isHovering ? 1 : 0,
          position: 'absolute',
          top: `0px`,
          left: `0px`,
          width: '100%',
          height: '100%',
          borderRadius: `inherit`,
          zIndex: -1,
        }}
      />
      <div
        style={{
          background: 'inherit',
          position: 'absolute',
          top: `${borderWidth}px`,
          left: `${borderWidth}px`,
          width: `calc(100% - ${borderWidth * 2}px)`,
          height: `calc(100% - ${borderWidth * 2}px)`,
          borderRadius: `inherit`,
          zIndex: -1,
        }}
      />
    </button>
  )
}

export default StickyCallToAction
