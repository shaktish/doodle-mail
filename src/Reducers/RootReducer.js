import {combineReducers} from 'redux';
import userListReducer from './UserListReducer';
import activeUserReducer from './ActiveUserReducer';
import messageListReducer from './MessageListReducer';

const RootReducer = combineReducers({
    userList: userListReducer,
    activeUser : activeUserReducer,
    messageList: messageListReducer
});

export default RootReducer;