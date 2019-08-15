const e = React.createElement;

class Profile extends React.Component {

    render() {
        const style = {
            padding: '10px',
            border: '1px solid green',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
            color: '#4db1e8',
            textAlign: 'center',
            fontFamily: 'sans-serif'
        }

        return (
            <div style={style}>
                <img src={this.props.logo_url} height="250px"/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Profile), domContainer);