import React, { Component } from 'react';

export default class FilterString extends Component {

constructor(){
    super();

    this.state = {
        coolCars: ['BMW i8', 'Tesla Model X', 'Audi e-tron', 'Mercedes-Benz G-Wagon', 'McLaren F1'],
        userInput: '',
        filteredCars: []
    };
}

handleChange(val) {
    this.setState({ userInput: val });
}

filterCars(userInput){
    let coolCars = this.state.coolCars;
    let filteredCars = [];

    for (let i = 0; i < coolCars.length; i++){
        if (coolCars[i].includes(userInput)){
            filteredCars.push(coolCars[i]);
        }
    }
    this.setState({ filteredCars: filteredCars });
}

    render(){
        return (
            <div className='puzzleBox filterStringPB'>
            <h4> Filter String </h4>
            <span className='puzzleText'> Names: { JSON.stringify(this.state.coolCars, null, 10) } </span>
            <input onChange={ (e) => this.handleChange(e.target.value) } className='inputLine' />
            <button onClick={ () => this.filterCars(this.state.userInput) } className='confirmationButton'> Filter </button>
        <span className='resultsBox filterStringRB'>Filtered: { JSON.stringify(this.state.filteredCars, null, 10) }</span>
            </div>

        )
    }
}

