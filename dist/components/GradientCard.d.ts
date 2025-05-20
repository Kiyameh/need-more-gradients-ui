import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type GradientCardProps = React.HTMLAttributes<HTMLDivElement> & CommonComponentProps & {
    primary?: boolean;
};
declare function GradientCard({ primary, roundness, background, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: GradientCardProps): React.JSX.Element;
export default GradientCard;
