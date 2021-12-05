function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    function RunCallback(a, b, cb) {
        // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
        let res = a + b;
        return cb(res);
      }
      function cb(a) {
        return a;
      }
      module.exports = RunCallback;
}

module.exports = RunCallback;
