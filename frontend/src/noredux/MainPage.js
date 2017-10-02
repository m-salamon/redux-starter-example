import React from 'react';
import Form from './Form';
import List from './List';
import axios from 'axios';

export default class Page extends React.Component {
    constructor() {
        super();
        this.state = {
            car: {
                make: '',
                model: '',
                year: ''
            },
            cars: []
        }
    }

    componentDidMount() {
        this.getAllCars();
    }

    async getAllCars() {
        let response = await axios.get('/api/cars/allcars');
        this.setState({cars: response.data});
    }

    changeHandler(e) {
        let car = this.state.car;
        car[e.target.name] = e.target.value;
        this.setState({ car });
    }

    async save() {
        await axios.post('/api/cars/addcar', this.state.car);
        this.getAllCars();
    }

    render() {
        return (
            <div>
                <Form save={() => this.save()} change={(e) => this.changeHandler(e)} car={this.state.car} />
                <br />
                <List cars={this.state.cars} />
            </div>
        )
    }
}