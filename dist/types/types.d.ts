export interface CommonComponentProps {
    roundness?: number;
    background?: string;
    firstGradient?: string;
    secondGradient?: string;
    thirdGradient?: string;
    borderWidth?: number;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
