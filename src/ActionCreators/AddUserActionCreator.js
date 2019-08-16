import {ADD_USER} from './ActionType';
import uuid from "uuid";

const AddUserActionCreator = (payload) => {
    return {
        type : ADD_USER,
        payload : {...payload, id : uuid()  }
    }
}

export default AddUserActionCreator;