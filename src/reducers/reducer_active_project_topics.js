import {GET_PROJECT_TOPICS} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case GET_PROJECT_TOPICS:
            return action.payload;
            break;

        default:
            return state;
            break;
    }
}