import React from 'react';

const List = (props) => {

    function createRow(car) {
        return (
            <li key={car.id}>{car.make}  {car.model}</li>
        )
    }

    return (
        <ul>
            {props.cars.map(car => createRow(car))}
        </ul>
    )
}

export default List;