export function isFloat(n): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
export function isInteger(n): boolean {
    return !isNaN(parseInt(n)) && isFinite(n);
}

export function isOutsideConstraints(n, min, max): boolean {
    return n<min || n>max;
}

export function stringToConstrainedInt(n, min, max): number {
    const number = Math.round(parseFloat(n));
    return Math.max(min, Math.min(max, number));
}
export function stringToConstrainedFloat(n, min, max): number {
    const number = parseFloat(n);
    return Math.max(min, Math.min(max, number));
}


