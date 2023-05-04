interface CalcProps {
    pan: number;
    bu: number;
    isHead: boolean;
    isRon: boolean;
}

const calcUnderMankan = ({
    pan,
    bu,
    isHead,
    isRon,
}: CalcProps): Array<number> => {
    let points = [];
    const basePoint = bu * 2 ** (2 + pan);

    if (isRon) {
        const multiplier = isHead ? 6 : 4;
        const ronPoint = Math.points.push();
    } else {
    }

    return points;
};

export { calcUnderMankan };
