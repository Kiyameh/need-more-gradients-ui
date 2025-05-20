import { default as React } from 'react';
import { CommonComponentProps } from '../types/types';
type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & CommonComponentProps & {
    primary?: boolean;
};
declare function SpotlightCard({ primary, roundness, background, firstGradient, secondGradient, thirdGradient, borderWidth, children, style, ...props }: SpotlightCardProps): React.JSX.Element;
export default SpotlightCard;
