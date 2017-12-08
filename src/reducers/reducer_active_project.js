import SELECT_PROJECT from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_PROJECT:
            return action.payload;
            break;

        default:
            return state;
            break;
    }
}