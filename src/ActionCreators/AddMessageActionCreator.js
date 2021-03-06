import {ADD_MESSAGE} from './ActionType';
import uuid from "uuid";

const AddMessageActionCreator = (payload) => {
    return {
        type : ADD_MESSAGE,
        payload : {...payload, id : uuid()  }
    }
}

export default AddMessageActionCreator;