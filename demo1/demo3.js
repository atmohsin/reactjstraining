var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Profile = function (_React$Component) {
    _inherits(Profile, _React$Component);

    function Profile() {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
    }

    _createClass(Profile, [{
        key: 'render',
        value: function render() {
            var style = {
                padding: '10px',
                border: '1px solid green',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
                color: '#4db1e8',
                textAlign: 'center',
                fontFamily: 'sans-serif'
            };

            return React.createElement(
                'div',
                { style: style },
                React.createElement('img', { src: this.props.logo_url, height: '250px' }),
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                )
            );
        }
    }]);

    return Profile;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(e(Profile), domContainer);