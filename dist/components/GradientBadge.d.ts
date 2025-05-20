import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type GradientBadgeProps = React.HTMLAttributes<HTMLDivElement> & CommonComponentProps & {
    primary?: boolean;
};
export default function GradientBadge({ primary, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: GradientBadgeProps): React.JSX.Element;
export {};
