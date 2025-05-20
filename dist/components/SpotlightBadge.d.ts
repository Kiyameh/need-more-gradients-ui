import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type SpotlightBadgeProps = React.HTMLAttributes<HTMLDivElement> & CommonComponentProps & {
    primary?: boolean;
};
export default function SpotlightBadge({ primary, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: SpotlightBadgeProps): React.JSX.Element;
export {};
