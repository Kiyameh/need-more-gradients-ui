import React from 'react'
import {useState, useMemo} from 'react'
import type {CSSProperties} from 'react'
import type {CommonComponentProps} from '../types/types'

type GradientBadgeProps = React.HTMLAttributes<HTMLDivElement> &
  CommonComponentProps & {
    primary?: boolean
  }

export default function GradientBadge({
  primary = false,
  firstGradient = 'var(--gradient-100)',
  secondGradient = 'var(--gradient-200)',
  thirdGradient = 'var(--gradient-300)',
  borderWidth = 1,
  children,
  style,
  ...props
}: GradientBadgeProps) {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const colors = useMemo(
    () => ({
      backgroundColor: primary ? 'transparent' : 'var(--surface-100)',
      hoverColor: primary ? 'transparent' : 'var(--surface-300)',
      contentColor: primary ? 'white' : 'inherit',
    }),
    [primary]
  )

  const badgeStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: `0.8rem`,
      paddingInline: `0.8rem`,
      paddingBlock: `0.2rem`,
      userSelect: 'none',
      backgroundColor: isHovering ? colors.hoverColor : colors.backgroundColor,
      color: colors.contentColor,
      borderRadius: `1rem`,
      position: 'relative',
      zIndex: 1,
      ...style,
    }),
    [isHovering, colors, style]
  )

  const gradientStyle = useMemo<CSSProperties>(
    () => ({
      background: `linear-gradient(to right, ${firstGradient}, ${secondGradient}, ${thirdGradient})`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: `inherit`,
      zIndex: -1,
    }),
    [firstGradient, secondGradient, thirdGradient]
  )

  const borderStyle = useMemo<CSSProperties>(
    () => ({
      background: 'inherit',
      position: 'absolute',
      top: `${borderWidth}px`,
      left: `${borderWidth}px`,
      width: `calc(100% - ${borderWidth * 2}px)`,
      height: `calc(100% - ${borderWidth * 2}px)`,
      borderRadius: `inherit`,
      zIndex: -1,
    }),
    [borderWidth]
  )

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
      style={badgeStyle}
    >
      {children}
      <div style={gradientStyle} />
      <div style={borderStyle} />
    </div>
  )
}
