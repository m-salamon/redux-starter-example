import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class List extends React.Component {

    componentDidMount() {
        this.props.getAllCars();
    }

    createRow(car) {
        return (
            <li key={car.id}>{car.make} {car.model}</li>
        )
    }

    render() {
        return (
            <ul>
                {this.props.cars.map(car => this.createRow(car))}
            </ul>
        )
    }
}
 
function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

let reduxAware = connect(mapStateToProps, actions);
export default reduxAware(List);





