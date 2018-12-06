const { handleActions } = require('../components/react-actions/index');
const findItem  = require('../methods/findItem');
const findIndex = require('../methods/findIndex');

const FETCH_LIST = 'nav/FETCH_LIST';
const CHANGE_NAV = 'nav/CHANGE_NAV';
const DELETE_NAV = 'nav/DELETE_NAV';
const CHANGE_DROPDOWN = 'nav/CHANGE_DROPDOWN';

let initState = {
    list: [
        {
            id: 0,
            name: '首页',
            icon: 'home',
            iconActive: 'url(../../images/icon-home-active.png)',
            children: [],
            to: '/',
            active: true
        },
        {
            id: 1,
            name: '订单管理',
            icon: 'order',
            iconActive: 'url(../../images/icon-order-active.png)',
            children: [],
            to: '/order',
            active: false
        },
        {
            id: 2,
            name: '交易管理',
            icon: 'trade',
            iconActive: 'url(../../images/icon-trade-active.png)',
            children: [],
            to: '/trade',
            active: false
        },
        {
            id: 3,
            name: '账号管理',
            icon: 'account',
            iconActive: 'url(../../images/icon-account-active.png)',
            children: [],
            to: '/account',
            active: false
        },
        {
            id: 4,
            name: '系统管理',
            icon: 'set',
            iconActive: 'url(../../images/icon-set-active.png)',
            children: [],
            to: '/set',
            active: false
        }
    ],
    topNav:  [
        {
            id: 0,
            name: '首页',
            icon: './images/',
            children: [],
            to: '/',
            active: true
        }
    ],
    display: 'none'
};

const fetchListActionCreator = function (list = []) {
    return {
        type: FETCH_LIST,
        list
    }
};

const changeNavActionCreator = function (path = '/') {
    return {
        type: CHANGE_NAV,
        path
    }
};

const deleteNavActionCreator = function (path) {
    return {
        type: DELETE_NAV,
        path
    }
};

const changeUserDropdownActionCreator = function (str = 'none') {
    return {
        type: CHANGE_DROPDOWN,
        str
    }
};

const handleActionsObj = {
    [FETCH_LIST]: function (state, action) {
        return {
            ...state,
            list: action.list,
            topNav: [
                {
                    id: 0,
                    name: '首页',
                    icon: './images/',
                    children: [],
                    to: '/',
                    active: true
                }
            ]
        }
    },
    [CHANGE_NAV]: function (state, action) {
        let path = action.path;
        let list = JSON.parse(JSON.stringify(state.list));
        let topNav = JSON.parse(JSON.stringify(state.topNav));
        let item = findItem(list, 'to', path);
        if (item) {
            cleanActive(list);
            cleanActive(topNav);
            item.active = true;
            let topItem = findItem(topNav, 'to', path);
            if (topItem) {
                topItem.active = true;
            } else {
                topNav.push(item);
            }

        }
        return {
            ...state,
            list,
            topNav
        }
    },
    [DELETE_NAV]: function (state, action) {
        let path = action.path;
        let topNav = JSON.parse(JSON.stringify(state.topNav));
        let index = findIndex(topNav, 'to', path);
        console.log('index', index);
        topNav.splice(index, 1)
        return {
            ...state,
            topNav
        }
    },
    [CHANGE_DROPDOWN]: function (state, action) {
        return {
            ...state,
            display: action.str
        }
    }
};

const cleanActive = function (list) {
    for (let i = 0; i < list.length; i++) {
        list[i].active = false;
    }
};

module.exports = {
    fetchListActionCreator,
    changeNavActionCreator,
    deleteNavActionCreator,
    changeUserDropdownActionCreator,
    reducer: handleActions(handleActionsObj, initState)
};