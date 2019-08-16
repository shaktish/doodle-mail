import {
    ADD_MESSAGE
} from '../ActionCreators/ActionType';

const initState = {
    messageList : [
        {from: 'shaktish@gmail.com', to: ['santhosh@gmail.com', 'prakash@gmail.com'], content : 'Roger it!.', subject: 'Awesome!', id : 6},
        {from: 'prakash@gmail.com', to: ['shaktish@gmail.com'], content : 'That\'s Awesome, Let\'s watch it this Weekend', subject: 'Awesome!', id : 5},
        {from: 'santhosh@gmail.com', to: ['shaktish@gmail.com'], content : 'Sure, can we go for Komali Movie', subject: 'Long Time!', id : 4},
        {from: 'shaktish@gmail.com', to: ['santosh@gmail.com'], content : 'I\'m good, Let\'s catch up.' , subject: 'Long Time!', id : 3},
        {from: 'santhosh@gmail.com', to: ['shaktish@gmail.com'], content : ' I\'m fine, How are you doing', subject: 'Long Time!', id : 2},
        {from: 'shaktish@gmail.com', to: ['santhosh@gmail.com', 'prakash@gmail.com'], content : 'Hi, How are you? Its been long time.', subject: 'Long Time!', id : 1},
    ]
}

const messageListReducer = (state = initState.messageList, action) =>{
    switch(action.type) {
        case ADD_MESSAGE : 
            return [ action.payload, ...state]
        default : return state
    }
}

export default messageListReducer;