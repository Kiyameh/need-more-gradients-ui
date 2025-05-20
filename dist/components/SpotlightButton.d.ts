import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type SpotlightButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonComponentProps & {
    primary?: boolean;
};
declare function SpotlightButton({ primary, roundness, background, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: SpotlightButtonProps): React.JSX.Element;
export default SpotlightButton;
