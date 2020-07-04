import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/auth-reducer';
import {reducer as formReducer} from 'redux-form';
const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: profileReducer } = require("./reducers/profile-reducer");
const { default: dialogsReducer } = require("./reducers/dialogs-reducer");
const { default: usersReducer } = require("./reducers/users-reducer");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;