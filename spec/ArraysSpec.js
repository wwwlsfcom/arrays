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

        Arrays.remove(values);
        expect(values.length).toBe(5);

        Arrays.remove(values, 1, 6)

        expect(values.length).toBe(3);

        expect(values.includes(1)).toBeFalse();
        expect(values.includes(6)).toBeFalse();

        expect(values.includes(2)).toBeTrue();
        expect(values.includes(3)).toBeTrue();
        expect(values.includes(4)).toBeTrue();


    });

    it("identical", function () {
        expect(Arrays.identical([1, 2, 3, 4, 6], [1, 2, 3, 4, 6])).toBeTrue();
        expect(Arrays.identical([1, 2, 3, 4, 6], [1, 2, 3, 4])).toBeFalse();
        expect(Arrays.identical([1, 2, 3, 4, 6], [1, 2, 3, 4, 5])).toBeFalse();
        expect(Arrays.identical([1, 2, 3, 4, 6,], [1, 2, 3, 4, 6])).toBeTrue();
        expect(Arrays.identical([1, 2, 3, 4, undefined, 6], [1, 2, 3, 4, undefined, 6])).toBeTrue();
    });
});