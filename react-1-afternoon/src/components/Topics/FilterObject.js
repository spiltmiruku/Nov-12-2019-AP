import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor(){
        super();

        this.state = {
            unFilteredVeggies: [
                {
                veggie: 'carrot',
                color: 'orange',
                flavor: 'mildly sweet',
            },
            {
                veggie: 'potato',
                color: 'yellow',
            },
            {
                veggie: 'radish',
                color: 'pink',
                flavor: 'spicy',
            },
            {
                veggie: 'yam',
                flavor: 'sweet',
            },
            {
                veggie: 'daikon',
                color: 'white',
                flavor: 'mildly tangy',
            }
            ],

            userInput: '',
            filteredVeggies: []
        }   
    }
handleChange(val) {
    this.setState({ userInput: val });
}

filterVeggies(prop) {
    let unFilteredVeggies = this.state.unFilteredVeggies;
    let filteredVeggies = [];

    for (let i = 0; i < unFilteredVeggies.length; i++) {
        if (unFilteredVeggies[i].hasOwnProperty(prop) ) {
            filteredVeggies.push(unFilteredVeggies[i]);
        }
    }
    this.setState({ filteredVeggies: filteredVeggies });
}



    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
            <h4> Filter Object </h4>
            <span className='puzzleText'>Original: { JSON.stringify(this.state.unFilteredVeggies, null, 10) }</span>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) } />
            <button className='confirmationButton' onClick={ () => this.filterVeggies(this.state.userInput) }> Filter </button>
            <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredVeggies, null, 10) }</span>
            </div>
        )
    }
}