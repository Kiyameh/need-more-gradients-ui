import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type GradientCallToActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonComponentProps & {
    primary?: boolean;
};
declare function GradientCallToAction({ primary, roundness, background, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: GradientCallToActionProps): React.JSX.Element;
export default GradientCallToAction;
