import Profile from "./Profile"

const e = React.createElement;

class App extends React.Component {

    render() {
      
        return (
            <h2>Test</h2>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);