import * as types from './types';
import axios from 'axios';

function getAllCarsSuccess(cars) {
    return {
        type: types.GET_ALL_CARS_SUCCESS,
        payload: cars
    }
}

function addNewCarSuccess(car) {
    return {
        type: types.ADD_CAR_SUCCESS,
        payload: car
    }
}

function getAllCars() {
    return async dispatch => {
        let response = await axios.get('/api/cars/allcars');
        dispatch(getAllCarsSuccess(response.data));
    }
}


function addCar(car) {
    return async dispatch => {
        let response =  await axios.post('/api/cars/addcar', car);
        dispatch(addNewCarSuccess(response.data));
    }
}


export {
    getAllCars,
    addCar
}

