class Helpers {
    static genInputId(base = '') {
        return base + '_input_' + Date.now();
    }
    static genGroupId(base = '') {
        return base + 'fe-group-' + Date.now();
    }
}
export default Helpers
