export default function bs_list(haystack: number[], needle: number): boolean {
    let min = 0;
    let max = haystack.length;

    do {
        const mid = Math.floor(min + (max - min) / 2);
        const value = haystack[mid];
        if (value === needle) return true;
        if (value > needle) max = mid;
        if (value < needle) min = mid + 1;
    } while (min < max);
    return false;
}
