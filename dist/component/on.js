'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ON = function (_React$Component) {
  _inherits(ON, _React$Component);

  function ON() {
    _classCallCheck(this, ON);

    return _possibleConstructorReturn(this, (ON.__proto__ || Object.getPrototypeOf(ON)).apply(this, arguments));
  }

  _createClass(ON, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '37', height: '21', viewBox: '0 0 37 21' },
        _react2.default.createElement(
          'text',
          { x: '0', y: '45%', fontWeight: '500', fontSize: '11', fill: '#34230B' },
          'ON'
        )
      );
    }
  }]);

  return ON;
}(_react2.default.Component);

exports.default = ON;


var ON1 = function ON1() {
  _react2.default.createElement(
    'svg',
    { width: '37', height: '21', viewBox: '0 0 37 21' },
    _react2.default.createElement(
      'text',
      { x: '0', y: '45%', fontWeight: '500', fontSize: '11', fill: '#34230B' },
      '1'
    )
  );
};