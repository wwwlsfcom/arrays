import {Arrays} from "../index.js";

describe("Arrays方法", function () {
    it("toggle", function () {
        const values = [1, 2, 3, 4, 6];
        Arrays.toggle(values, 5)
        expect(values.includes(5)).toBeTrue();
        Arrays.toggle(values, 6);
        expect(values.includes(6)).toBeFalse();
    });

    it("remove", function () {
        const values = [1, 2, 3, 4, 6];
        Arrays.remove(values, 5)
        expect(values.includes(5)).toBeFalse();
        Arrays.remove(values, 6);
        expect(values.includes(6)).toBeFalse();
    });

    it("identical", function () {
        expect(Arrays.identical([1, 2, 3, 4, 6], [1, 2, 3, 4, 6])).toBeTrue();
        expect(Arrays.identical([1, 2, 3, 4, 6], [1, 2, 3, 4])).toBeFalse();
        expect(Arrays.identical([1, 2, 3, 4, 6], [1, 2, 3, 4, 5])).toBeFalse();
        expect(Arrays.identical([1, 2, 3, 4, 6,], [1, 2, 3, 4, 6])).toBeTrue();
        expect(Arrays.identical([1, 2, 3, 4, undefined, 6], [1, 2, 3, 4, undefined, 6])).toBeTrue();
    });
});