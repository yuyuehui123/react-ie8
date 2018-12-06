const navList = [
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
];

module.exports = navList;