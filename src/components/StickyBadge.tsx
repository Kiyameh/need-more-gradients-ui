import React from 'react'
import {useState, useRef} from 'react'
import type {CommonComponentProps} from '../types/types'

type StickyBadgeProps = React.HTMLAttributes<HTMLDivElement> &
  CommonComponentProps

export default function StickyBadge({
  firstGradient = 'var(--gradient-100)',
  secondGradient = 'var(--gradient-200)',
  thirdGradient = 'var(--gradient-300)',
  borderWidth = 1,
  children,
  style,
  ...props
}: StickyBadgeProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={ref}
      style={{
        fontSize: `0.8rem`,
        paddingInline: `0.8rem`,
        paddingBlock: `0.2rem`,
        userSelect: 'none',
        backgroundColor: isHovering
          ? 'var(--surface-300)'
          : 'var(--surface-100)',
        color: 'inherit',
        borderRadius: `1rem`,
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
    </div>
  )
}
