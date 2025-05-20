import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type StickyCallToActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonComponentProps;
declare function StickyCallToAction({ roundness, background, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: StickyCallToActionProps): React.JSX.Element;
export default StickyCallToAction;
