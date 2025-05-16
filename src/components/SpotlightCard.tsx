import type {CommonComponentProps} from './more-gradients.types'
import {useMemo} from 'react'
import type {CSSProperties} from 'react'

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> &
  CommonComponentProps & {
    primary?: boolean
  }

function SpotlightCard({
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
}: SpotlightCardProps) {
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
      overflow: 'hidden',
      zIndex: 1,
      ...style,
    }),
    [colors, roundness, style]
  )

  const gradientStyle = useMemo<CSSProperties>(
    () => ({
      background: `conic-gradient(
      from 0deg,
      ${firstGradient} 0%,
      ${secondGradient} 33%,
      ${thirdGradient} 66%,
      ${firstGradient} 100%,
      transparent 100%
      )`,
      animation: 'spotlight-spin 4s linear infinite',
      position: 'absolute',
      top: '-300%',
      left: '-100%',
      width: '300%',
      aspectRatio: '1/1',
      borderRadius: `999px`,
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
      <style>
        {`
          @keyframes spotlight-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}

export default SpotlightCard
