/* TODO are those 2 still needed?
export function isFloat(n:string): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
export function isInteger(n:string): boolean {
    return !isNaN(parseInt(n)) && isFinite(n);
}
*/

/**
 * Trims any leading and trailing whitespaces from the input string and converts it to a number using `parseFloat`.
 *
 * @param {string} str - The string to convert to a number. The string can represent an integer or a floating point number.
 *
 * @returns {number} The number parsed from the input string. If the string doesn't represent a valid number, the function will return `NaN`.
 *
 * @example
 * let number = stringToNumber(" 123.45 ");
 * console.log(number); // Outputs: 123.45
 */
export function parseStringToFloat(str:string): number {
    return parseFloat(str.trim());
}

/**
 * Checks if a number is outside a given range.
 *
 * @param {number} n - The number to check.
 * @param {number} min - The minimum number of the range.
 * @param {number} max - The maximum number of the range.
 *
 * @returns {boolean} Returns `true` if the number is less than the min number or greater than the max number. Returns `false` otherwise.
 *
 * @example
 * let testNumber = 15;
 * console.log(isOutsideConstraints(testNumber, 10, 20)); // Outputs: false
 */
export function isOutOfRange(n:number, min:number, max:number): boolean {
    return n<min || n>max;
}

/**
 * Converts a string to an integer and ensures it falls within a specified range.
 * The function automatically adjusts the constraints if min is bigger than max.
 * If the parsed number exceeds the range, it's clamped to the closest boundary.
 *
 * @param {string} n - The string to convert. It should represent a number.
 * @param {number} min - The minimum acceptable number for the output number.
 * @param {number} max - The maximum acceptable number for the output number.
 *
 * @returns {number} Returns the parsed and constrained integer.
 *
 * @example
 * // considering "15" as input string, lower boundary as 10 and upper boundary as 20.
 * let constrainedInt = stringToConstrainedInt("15", 10, 20);
 * console.log(constrainedInt); // Outputs: 15
 *
 * // considering "25" as input string, lower boundary as 10 and upper boundary as 20.
 * constrainedInt = stringToConstrainedInt("25", 10, 20);
 * console.log(constrainedInt); // Outputs: 20
 */
export function parseStringAndClampInt(n:string, min:number, max:number): number {
    if (min > max) {
        [min, max] = [max, min];
    }

    const number = Math.round(parseStringToFloat(n));
    return Math.max(min, Math.min(max, number));
}

/**
 * Converts a string to a floating point number and ensures it falls within a specified range.
 * The function automatically adjusts the constraints if min is bigger than max.
 * If the parsed number exceeds the range, it's clamped to the nearest boundary.
 *
 * @param {string} n - The string to convert. It should represent a valid decimal number.
 * @param {number} min - The minimum acceptable number for the output number.
 * @param {number} max - The maximum acceptable number for the output number.
 *
 * @returns {number} Returns the parsed and constrained floating point number.
 *
 * @example
 * // considering "15.7" as input string, lower boundary as 10 and upper boundary as 20.
 * let constrainedFloat = stringToConstrainedFloat("15.7", 10, 20);
 * console.log(constrainedFloat); // Outputs: 15.7
 *
 * // considering "25.3" as input string, lower boundary as 10 and upper boundary as 20.
 * constrainedFloat = stringToConstrainedFloat("25.3", 10, 20);
 * console.log(constrainedFloat); // Outputs: 20
 */
export function parseStringAndClampFloat(n:string, min:number, max:number): number {
    if (min > max) {
        [min, max] = [max, min];
    }

    const number = parseStringToFloat(n);
    return Math.max(min, Math.min(max, number));
}

/**
 * Ensures that a number falls within the specified range.
 * If the specified range is inversed, it corrects the range order automatically.
 *
 * @param {number} number - The input number to clamp.
 * @param {number} min - The lower bound of the range.
 * @param {number} max - The upper bound of the range.
 * @returns {number} - The clamped number, which will be between min and max (inclusive).
 * @example
 * // returns 10
 * clamp(10, 0, 15);
 * // returns 0
 * clamp(-10, 0, 15);
 * // returns 15
 * clamp(100, 0, 15);
 * // returns 10 (range is corrected automatically)
 * clamp(10, 15, 0);
 */
export function clamp(number: number, min:number, max:number): number {
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.max(min, Math.min(max, number));
}




