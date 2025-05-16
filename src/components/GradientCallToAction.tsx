import type {CommonComponentProps} from './more-gradients.types'
import {useState, useMemo} from 'react'
import type {CSSProperties} from 'react'

type GradientCallToActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonComponentProps & {
    primary?: boolean
  }

function GradientCallToAction({
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
}: GradientCallToActionProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

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

  const colors = useMemo(
    () => ({
      backgroundColor: primary ? 'transparent' : background,
      hoverColor: primary ? 'transparent' : 'var(--surface-300)',
      pressedColor: primary ? 'var(--surface-300)' : 'transparent',

      contentColor: primary ? 'white' : 'inherit',
      pressedContentColor: primary ? 'inherit' : 'white',
    }),
    [primary, background]
  )

  const buttonStyle = useMemo<CSSProperties>(
    () => ({
      background: isPressed
        ? colors.pressedColor
        : isHovering
        ? colors.hoverColor
        : colors.backgroundColor,
      color: isPressed ? colors.pressedContentColor : colors.contentColor,
      borderRadius: `${roundness * 2}rem ${roundness * 2}rem 0 ${
        roundness * 2
      }rem`,
      paddingInline: `2rem`,
      paddingBlock: `0.8rem`,
      fontSize: '1.2rem',
      userSelect: 'none',
      cursor: 'pointer',
      position: 'relative',
      zIndex: 1,
      border: 'none',
      ...style,
    }),
    [
      isPressed,
      isHovering,
      colors,
      firstGradient,
      secondGradient,
      thirdGradient,
      roundness,
      style,
    ]
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
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
      style={buttonStyle}
    >
      {children}
      <div style={gradientStyle} />
      <div style={borderStyle} />
    </button>
  )
}

export default GradientCallToAction
