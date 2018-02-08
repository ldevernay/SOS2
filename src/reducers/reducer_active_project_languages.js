import {GET_PROJECT_LANGUAGES} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case GET_PROJECT_LANGUAGES:
            return action.payload;
            break;

        default:
            return state;
            break;
    }
}