import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type GradientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonComponentProps & {
    primary?: boolean;
};
declare function GradientButton({ primary, roundness, background, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: GradientButtonProps): React.JSX.Element;
export default GradientButton;
