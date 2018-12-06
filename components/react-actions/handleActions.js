'use strict';

/*Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default*/
module.exports = handleActions;

var _handleAction = require('./handleAction');

var _handleAction2 = _interopRequireDefault(_handleAction);

var _ownKeys = require('./ownKeys');

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _reduceReducers = require('./reduce-reducer');

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function handleActions(handlers, defaultState) {
  var reducers = (0, _ownKeys)(handlers).map(function (type) {
    return (0, _handleAction)(type, handlers[type]);
  });
  var reducer = _reduceReducers.apply(undefined, _toConsumableArray(reducers));

  return typeof defaultState !== 'undefined' ? function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
    var action = arguments[1];
    return reducer(state, action);
  } : reducer;
}