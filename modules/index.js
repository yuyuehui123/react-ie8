const { combineReducers } = require('redux');
const { reducer: nav } = require('./navList');

module.exports = combineReducers({
    nav
});