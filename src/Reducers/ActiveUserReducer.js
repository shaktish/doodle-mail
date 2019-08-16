import {
    ADD_USER,
    SET_ACTIVE_USER
} from '../ActionCreators/ActionType';

const initState = {
    activeUser : {firstName:'shaktish', lastName:'kumar', email:'shaktish@gmail.com', mobile:'9176683582', profileImg : 'https://pbs.twimg.com/profile_images/619665004803981312/WWnvYOq6_400x400.jpg'},
}

const activeUserReducer = (state = initState.activeUser, action) =>{
    switch(action.type) {
        case ADD_USER : 
        case SET_ACTIVE_USER : 
            return {
                ...state,                    
                ...action.payload
            }

        default: return state
    }
}

export default activeUserReducer;