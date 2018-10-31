import {FETCH_POST, NEW_POST} from '../actions/types';

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState, actions){
    switch(actions.type){
        case FETCH_POST:
        console.log('reducer');
            return {
                ...state,
                items : actions.payload
            }
        default:
            return state;
    }
}