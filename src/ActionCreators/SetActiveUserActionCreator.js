import {SET_ACTIVE_USER} from './ActionType';

const SetActiveUserActionCreator = (payload) => {
    return {
        type : SET_ACTIVE_USER,
        payload : {...payload }
    }
}

export default SetActiveUserActionCreator;