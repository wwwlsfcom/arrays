/**
 * 扩展Array对象功能，增加了操作数组的快捷方法
 *
 */
export const Arrays = {

    /**
     * 从数组中添加或移除值
     * @param {Array} values
     * @param {any} value
     * @return {any[]}
     */
    toggle(values, value) {
        if (Array.isArray(values)) {
            const index = values.indexOf(value);
            if (index > -1) {
                values.splice(index, 1);
            } else {
                values.push(value);
            }
        }
    },

    /**
     * 从数组中移除值
     * @param {Array} values
     * @param {any} value
     */
    remove(values, value) {
        if (Array.isArray(values)) {
            const index = values.indexOf(value);
            if (index > -1) {
                values.splice(index, 1);
            }
        }
    },

    /**
     * 判断两个数组完全一样
     * @param {Array} values1
     * @param {Array} values2
     * @return {boolean}
     */
    identical(values1, values2) {
        if (Array.isArray(values1) && Array.isArray(values2)) {
            if (values1.length === values2.length) {
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] !== values2[i]) {
                        return false;
                    }
                }
                return true;
            }
        }

        return false;
    }
}