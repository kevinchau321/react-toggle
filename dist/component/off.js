'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OFF_MONITOR_CUE = exports.OFF2 = exports.OFF1 = exports.OFF = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OFF = function (_React$Component) {
  _inherits(OFF, _React$Component);

  function OFF() {
    _classCallCheck(this, OFF);

    return _possibleConstructorReturn(this, (OFF.__proto__ || Object.getPrototypeOf(OFF)).apply(this, arguments));
  }

  _createClass(OFF, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '37', height: '21', viewBox: '0 0 37 21' },
        _react2.default.createElement(
          'text',
          { x: '0', y: '45%', fontWeight: '500', fontSize: '11', fill: '#A9A9A9' },
          'ON'
        )
      );
    }
  }]);

  return OFF;
}(_react2.default.Component);

var OFF1 = function (_React$Component2) {
  _inherits(OFF1, _React$Component2);

  function OFF1() {
    _classCallCheck(this, OFF1);

    return _possibleConstructorReturn(this, (OFF1.__proto__ || Object.getPrototypeOf(OFF1)).apply(this, arguments));
  }

  _createClass(OFF1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '21', height: '23', viewBox: '0 0 21 23' },
        _react2.default.createElement(
          'text',
          { x: '63%', y: '40%', fontWeight: '500', fontSize: '11', fill: '#D6D6D6' },
          '1'
        )
      );
    }
  }]);

  return OFF1;
}(_react2.default.Component);

var OFF2 = function (_React$Component3) {
  _inherits(OFF2, _React$Component3);

  function OFF2() {
    _classCallCheck(this, OFF2);

    return _possibleConstructorReturn(this, (OFF2.__proto__ || Object.getPrototypeOf(OFF2)).apply(this, arguments));
  }

  _createClass(OFF2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '21', height: '23', viewBox: '0 0 21 23' },
        _react2.default.createElement(
          'text',
          { x: '63%', y: '40%', fontWeight: '500', fontSize: '11', fill: '#D6D6D6' },
          '2'
        )
      );
    }
  }]);

  return OFF2;
}(_react2.default.Component);

var OFF_MONITOR_CUE = function (_React$Component4) {
  _inherits(OFF_MONITOR_CUE, _React$Component4);

  function OFF_MONITOR_CUE() {
    _classCallCheck(this, OFF_MONITOR_CUE);

    return _possibleConstructorReturn(this, (OFF_MONITOR_CUE.__proto__ || Object.getPrototypeOf(OFF_MONITOR_CUE)).apply(this, arguments));
  }

  _createClass(OFF_MONITOR_CUE, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '33', height: '24', viewBox: '0 0 33 24' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-6,20.000000) scale(0.100000,-0.100000)',
            fill: '#d8d8d8', stroke: 'none' },
          _react2.default.createElement('path', { d: 'M102 184 c-27 -18 -29 -66 -6 -112 20 -42 34 -40 34 3 0 27 -5 38 -21 43 -20 8 -20 8 -1 32 27 33 87 33 114 0 19 -24 19 -24 -1 -32 -16 -5 -21 -16 -21 -43 0 -43 14 -45 34 -3 38 75 10 128 -69 128 -22 0 -51 -7 -63 -16z' })
        )
      );
    }
  }]);

  return OFF_MONITOR_CUE;
}(_react2.default.Component);

exports.OFF = OFF;
exports.OFF1 = OFF1;
exports.OFF2 = OFF2;
exports.OFF_MONITOR_CUE = OFF_MONITOR_CUE;