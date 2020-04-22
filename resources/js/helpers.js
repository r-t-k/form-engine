class Helpers {
    static genInputId(base = '') {
        return base + '_input_' + Date.now();
    }
}
export default Helpers
