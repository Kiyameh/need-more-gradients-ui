import {useState, useMemo} from 'react'
import type {CommonComponentProps} from './more-gradients.types'
import type {CSSProperties} from 'react'

type SpotlightBadgeProps = React.HTMLAttributes<HTMLDivElement> &
  CommonComponentProps & {
    primary?: boolean
  }

export default function SpotlightBadge({
  primary = false,
  firstGradient = 'var(--gradient-100)',
  secondGradient = 'var(--gradient-200)',
  thirdGradient = 'var(--gradient-300)',
  borderWidth = 1,
  children,
  style,
  ...props
}: SpotlightBadgeProps) {
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
      overflow: 'hidden',
      zIndex: 1,
      ...style,
    }),
    [isHovering, colors, style]
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
      left: '-50%',
      width: '200%',
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
      style={badgeStyle}
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
