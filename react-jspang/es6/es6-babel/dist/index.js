"use strict";

var a = 0,
    b = 1,
    c = 2;

console.log(a, b, c);

var _d$e = { d: "foo", e: "bar" },
    d = _d$e.d,
    e = _d$e.e;

console.log(d, e);

var arr1 = ["fa", "br"];
var arr2 = [].concat(arr1);
arr2.push("ld");
console.log("arr1 ", arr1);
console.log("arr2 ", arr2);

function show() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
    console.log(arguments.length <= 3 ? undefined : arguments[3]);
}
show(1, 3, 5);

function showRest(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    console.log("rest arg.length ", arg.length);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
showRest(1, 2, 3, 4, 5);

var name = 'peter';
var word = "this is <br/>\n my " + name + ",hello.";
console.log(word);
