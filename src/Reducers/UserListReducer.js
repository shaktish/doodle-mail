import {
    ADD_USER 
} from '../ActionCreators/ActionType';

const initState = {
    userList : [
                {firstName:'shaktish', lastName:'kumar', email:'shaktish@gmail.com', mobile:'9176683582', profileImg : 'https://pbs.twimg.com/profile_images/619665004803981312/WWnvYOq6_400x400.jpg'},
                {firstName:'santhosh', lastName:'babu', email:'santhosh@gmail.com', mobile:'9600115498', profileImg : 'https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg'}
            ]
}

const userListReducer = (state = initState.userList, action) =>{
    switch(action.type) {
        case ADD_USER : 
            return [
                ...state, 
                action.payload
            ]
        default : return state
    }
}

export default userListReducer;