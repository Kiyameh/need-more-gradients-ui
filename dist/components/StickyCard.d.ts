import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type StickyCardProps = React.HTMLAttributes<HTMLDivElement> & CommonComponentProps;
declare function StickyCard({ roundness, background, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: StickyCardProps): React.JSX.Element;
export default StickyCard;
