import React from 'react';

const Form = (props) => {
    return (
        <form>
            <input
                onChange={props.change}
                type='text'
                name='make'
                value={props.car.make}
                placeholder="make" />
            <br />
            <input
                onChange={props.change}
                type='text'
                name='model'
                value={props.car.model}
                placeholder="model" />
            <br />
            <input
                onChange={props.change}
                type='text'
                name='year'
                value={props.car.year}
                placeholder="year" />
            <br />
            <button onClick={props.save} type="button">Save</button>
        </form>
    )
}

export default Form;