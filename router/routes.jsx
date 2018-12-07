const React = require('react');
const { Router, Route, IndexRoute, browserHistory, useRouterHistory } = require('react-router');
const History = require('history');
const Nav = require('../views/nav/nav.jsx');
const Account = require('../views/account/account.jsx');
const Home = require('../views/home/home.jsx');


const Order = require('../views/order/order.jsx');
const Set = require('../views/set/set.jsx');
const Trade = require('../views/trade/trade.jsx');

const Login = require('../views/login/login.jsx');

//history插件使同一个路由下跳转不会导致完全刷新,queryKey可以禁用查询后缀
let hashHistory = useRouterHistory(History.createHashHistory)({
    queryKey: false
});


module.exports = (
    <Router history={hashHistory}>
        <Route component={(Login)} path={'/login'}></Route>
        <Route path={'/'} component={(Nav)}>
            <IndexRoute component={(Home)} />
            <Route path={'account'} component={(Account)} />
            <Route path={'order'} component={(Order)} />
            <Route path={'set'} component={(Set)} />
            <Route path={'trade'} component={(Trade)} />
        </Route>
    </Router>
);

/*
module.exports = (
    <Router history={hashHistory}>
        <Route component={(Login)} path={'/'}></Route>
        {/!*<Route path={'/'} component={(Nav)}>
            <IndexRoute component={(Home)} />
            <Route path={'account'} component={(Account)} />
            <Route path={'order'} component={(Order)} />
            <Route path={'set'} component={(Set)} />
            <Route path={'trade'} component={(Trade)} />
        </Route>*!/}
        <Route path={'/home'} component={(Home)} />
        <Route path={'/account'} component={(Account)} />
        <Route path={'/order'} component={(Order)} />
        <Route path={'/set'} component={(Set)} />
        <Route path={'/trade'} component={(Trade)} />
    </Router>
);*/
