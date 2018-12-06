require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('fetch-ie8');
require('babel-polyfill');
require('../css/layui.css');
require('./app.less');

const React = require('react');
const ReactDom = require('react-dom');
const router = require('../router/routes.jsx');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const reducers = require('../modules/index');

class Text extends React.Component {
    render () {
        return (
            <div>
                <h1>ie 8欢迎你</h1>
            </div>
        )
    }
}

/*ReactDom.render(
    <Provider store={createStore(reducers)}>
        {router}
    </Provider>,
    document.getElementById('content')
);*/

ReactDom.render(
    <Provider store={createStore(reducers)}>
        {router}
    </Provider>,
    document.getElementById('content')
);
