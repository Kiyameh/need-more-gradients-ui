import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type SpotlightCallToActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonComponentProps & {
    primary?: boolean;
};
declare function SpotlightCallToAction({ primary, roundness, background, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: SpotlightCallToActionProps): React.JSX.Element;
export default SpotlightCallToAction;
