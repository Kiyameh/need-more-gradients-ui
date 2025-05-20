import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type StickyBadgeProps = React.HTMLAttributes<HTMLDivElement> & CommonComponentProps;
export default function StickyBadge({ firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: StickyBadgeProps): React.JSX.Element;
export {};
