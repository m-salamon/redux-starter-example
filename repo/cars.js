import knex from './config';


function addCar(car) {
    return knex('cars').insert(car);
}

function editCar(car) {
    return knex('cars').update(car).where('id', car.id);
}

function deleteCar(id) {
    return knex('cars').del().where('id', id);
}

function getAllCars() {
    return knex('cars').select();
}

function getCarById(id) {
    return knex('cars').select().where('id', id).first();
}

export {
    addCar,
    editCar,
    deleteCar,
    getAllCars,
    getCarById
}







