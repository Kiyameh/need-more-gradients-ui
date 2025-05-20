import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type StickyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonComponentProps;
declare function StickyButton({ roundness, background, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: StickyButtonProps): React.JSX.Element;
export default StickyButton;
