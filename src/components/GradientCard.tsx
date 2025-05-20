import React from 'react'
import {useMemo} from 'react'
import type {CSSProperties} from 'react'
import type {CommonComponentProps} from '../types/types'

type GradientCardProps = React.HTMLAttributes<HTMLDivElement> &
  CommonComponentProps & {
    primary?: boolean
  }

function GradientCard({
  primary = false,
  roundness = 1,
  background = 'var(--surface-100)',
  firstGradient = 'var(--gradient-100)',
  secondGradient = 'var(--gradient-200)',
  thirdGradient = 'var(--gradient-300)',
  borderWidth = 1,
  children,
  style,
  ...props
}: GradientCardProps) {
  const colors = useMemo(
    () => ({
      backgroundColor: primary ? 'transparent' : background,
      contentColor: primary ? 'white' : 'inherit',
    }),
    [primary, background]
  )

  const cardStyle = useMemo<CSSProperties>(
    () => ({
      backgroundColor: colors.backgroundColor,
      color: colors.contentColor,
      borderRadius: `${roundness}rem`,
      padding: `1rem`,
      position: 'relative',
      zIndex: 1,
      ...style,
    }),
    [colors, roundness, style]
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
      {...props}
      style={cardStyle}
    >
      {children}
      <div style={gradientStyle} />
      <div style={borderStyle} />
    </div>
  )
}

export default GradientCard
