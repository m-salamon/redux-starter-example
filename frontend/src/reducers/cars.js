import * as types from '../actions/types';

export default function carReducer(state = [], action) {
    switch(action.type) {
        case types.GET_ALL_CARS_SUCCESS:
            return action.payload
        case types.ADD_CAR_SUCCESS:
            return [...state, action.payload]
        default:
            return state;
    }
}