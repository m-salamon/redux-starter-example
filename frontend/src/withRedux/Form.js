import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            car: {
                make: '',
                model: '',
                year: ''
            }
        }
    }

    changeHandler(e) {
        let car = this.state.car;
        car[e.target.name] = e.target.value;
        this.setState({car});
    }

    save() {
        this.props.addCar(this.state.car);
    }

    render() {
        return (
            <form>
                <input
                    onChange={(e) => this.changeHandler(e)}
                    type='text'
                    name='make'
                    value={this.state.car.make}
                    placeholder="make" />
                <br />
                <input
                    onChange={(e) => this.changeHandler(e)}
                    type='text'
                    name='model'
                    value={this.state.car.model}
                    placeholder="model" />
                <br />
                <input
                    onChange={(e) => this.changeHandler(e)}
                    type='text'
                    name='year'
                    value={this.state.car.year}
                    placeholder="year" />
                <br />
                <button onClick={() => this.save()} type="button">Save</button>
            </form>
        )
    }
}


export default connect(null, actions)(Form);





