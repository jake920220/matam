import { PAN_GRADE } from "../constants";

interface CalcProps {
    pan: number;
    isHead: boolean;
    isRon: boolean;
}

interface UnderMankanProps extends CalcProps {
    bu: number;
}

/**
 * 만관 이하의 역을 계산해서 return 해준다. 부수로 만관을 넘기는 경우는 calcAboveMankan으로 계산하여 return 해준다.
 * @param pan
 * @param bu
 * @param isHead
 * @param isRon
 */
const calcUnderMankan = ({
    pan,
    bu,
    isHead,
    isRon,
}: UnderMankanProps): string => {
    const isMankan = checkIsMankan(pan, bu);
    if (isMankan) {
        return calcAboveMankan({ pan: 5, isHead, isRon });
    }

    let calculatedPoint = "";
    const basePoint = bu * 2 ** (2 + pan);
    let total = isHead
        ? [basePoint * 2, basePoint * 2, basePoint * 2]
        : [basePoint, basePoint, basePoint * 2];

    if (isRon) {
        let point = 0;
        total.forEach((item) => {
            point += item;
        });

        calculatedPoint = ceilUp(point).toString();
    } else {
        calculatedPoint = isHead
            ? `${ceilUp(total[0])} ALL`
            : `${ceilUp(total[0])} / ${ceilUp(total[2])}`;
    }
    return calculatedPoint;
};

/**
 * 3판 80부이상, 4판 40부 이상은 만관으로 처리할 수 있도록 true를 반환, 나머지는 false를 반환한다.
 * @param pan
 * @param bu
 */
const checkIsMankan = (pan: number, bu: number): boolean => {
    if (pan < 3) {
        return false;
    } else {
        if (pan === 3) {
            return bu >= 80;
        } else {
            return bu >= 40;
        }
    }
};

const calcAboveMankan = ({ pan, isHead, isRon }: CalcProps): string => {
    let point = PAN_GRADE[pan][isHead ? "head" : "child"];
    let calculatedPoint = "";
    if (isRon) {
        calculatedPoint = `${point < 10000 ? point : point + "!!!"}`;
    } else {
        calculatedPoint = isHead
            ? `${point / 4} ALL`
            : `${point / 4} / ${(point / 4) * 2}`;
    }
    return calculatedPoint;
};

const ceilUp = (num: number): number => {
    return Math.ceil(num / 100) * 100;
};

const calcPanBusu = () => {};

export { calcUnderMankan, calcAboveMankan, calcPanBusu };
