import GET_PROJECT from '../actions/index';
import fetchProject from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case GET_PROJECT:
            return [action.payload.data, ...state];
            break;
    
        default:
            break;
    }
}