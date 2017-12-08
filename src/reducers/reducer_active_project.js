import {GET_PROJECT} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case GET_PROJECT:
            return action.payload;
            break;

        default:
            return state;
            break;
    }
}