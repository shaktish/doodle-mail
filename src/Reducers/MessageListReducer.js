import {
    ADD_MESSAGE
} from '../ActionCreators/ActionType';

const initState = {
    messageList : [
        {from: 'shaktish@gmail.com', to: ['santhosh@gmail.com', 'srinivas@gmail.com'], content : 'Hi Bro', subject: 'welcome home!', id : 1},
        {from: 'santosh@gmail.com', to: ['shaktish@gmail.com'], content : 'Hi Tell me', subject: 're:welcome home!', id : 2},
        {from: 'shaktish@gmail.com', to: ['santhosh@gmail.com'], content : 'Will ya hava dinner tonight at home', subject: 're: re:welcome home!', id : 3},
        {from: 'santhosh@gmail.com', to: ['shaktish@gmail.com'], content : 'Yes, I ll be coming', subject: 're: re: re: welcome home!', id : 4},
        {from: 'seenu@gmail.com', to: ['shaktish@gmail.com'], content : 'Shall we book the erikarai shop?', subject: 'Shop hunt!', id : 5},
        {from: 'shaktish@gmail.com', to: ['seenu@gmail.com', 'santhosh@gmail.com', 'santhosh@gmail.com'], content : 'Thumbs up!!', id : 6},
    ]
}

const messageListReducer = (state = initState.messageList, action) =>{
    switch(action.type) {
        case ADD_MESSAGE : 
            return [...state, action.payload]
        default : return state
    }
}

export default messageListReducer;