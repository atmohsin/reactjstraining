var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LifeCycleMethods = function (_React$Component) {
    _inherits(LifeCycleMethods, _React$Component);

    function LifeCycleMethods(props) {
        _classCallCheck(this, LifeCycleMethods);

        var _this = _possibleConstructorReturn(this, (LifeCycleMethods.__proto__ || Object.getPrototypeOf(LifeCycleMethods)).call(this, props));

        console.log('constructor');
        _this.state = { "username": "" };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    // component methods
    // ReactJS Component Mounting Methods


    _createClass(LifeCycleMethods, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("componentDidMount");
        }
        // ReactJS Component Updating Methods

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            console.log("shouldComponentUpdate");
            return true;
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            console.log("componentDidUpdate");
        }
        // ReactJS Component Unmounting Methods

    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("componentWillUnmount");
        }
        // custom methods

    }, {
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({ username: event.target.value });
        }
    }, {
        key: "render",
        value: function render() {
            console.log("render");
            return React.createElement(
                "form",
                null,
                React.createElement(
                    "label",
                    null,
                    "Name: "
                ),
                React.createElement("input", { name: "username", onChange: this.handleChange }),
                React.createElement("br", null),
                "Your name is \"",
                this.state.username,
                "\""
            );
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
            console.log("getDerivedStateFromProps");
            console.log(props, state);
            return {};
        }
    }]);

    return LifeCycleMethods;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(e(LifeCycleMethods), domContainer);