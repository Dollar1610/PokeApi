import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './bootstrap/css/bootstrap.min.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import imageFormatter from './imageFormatter';
import enumFormatter from './enumFormatter';

let    pokemon_attr0 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr1 = {
        id: '',
        image:'',
        name:'',
        type:'',
        abilities:'',
        speed:'',
        color:'',
        habitats:''
    };
let    pokemon_attr2 = {
        id: '',
        image:'',
        name:'',
        type:'',
        abilities:'',
        speed:'',
        color:'',
        habitats:''
    };
let    pokemon_attr3 = {
        id: '',
        image:'',
        name:'',
        type:'',
        abilities:'',
        speed:'',
        color:'',
        habitats:''
    };
let    pokemon_attr4 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr5 = {
    id: '',
    name:'',
    avatar:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr6 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr7 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr8 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr9 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr10 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr11 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr12 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr13 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr14 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr15 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr16 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr17 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr18 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};
let    pokemon_attr19 = {
    id: '',
    image:'',
    name:'',
    type:'',
    abilities:'',
    speed:'',
    color:'',
    habitats:''
};

const pokemonsType = {
    'normal': 'normal',
    'poison': 'poison',
    'bug': 'bug',
    'flying': 'flying',
    'water': 'water',
    'fire': 'fire'
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [pokemon_attr0,pokemon_attr1,pokemon_attr2,pokemon_attr3,pokemon_attr4,pokemon_attr5,pokemon_attr6,pokemon_attr7,pokemon_attr8,pokemon_attr9,pokemon_attr10,pokemon_attr11,pokemon_attr12,pokemon_attr13,pokemon_attr14,pokemon_attr15,pokemon_attr16,pokemon_attr17,pokemon_attr18,pokemon_attr19]
        };

        this.save=this.save.bind(this);
    }

    save() {
        for (let i=0; i<20; i++) {
            let urll = `https://pokeapi.co/api/v2/pokemon/${i+1}/`;
            fetch(urll, {
                headers: {
                    'Content-type': 'text/html Access-Control-Allow-Origin: *'
                }
            })
                .then((response) => {
                        response.json()
                            .then((data) => {
                                this.setState((prevState) => {
                                    prevState.pokemons[i].id = i;
                                    prevState.pokemons[i].name = data.name;
                                    prevState.pokemons[i].image = data.sprites.front_default;
                                    prevState.pokemons[i].type = data.types[0].type.name;
                                    prevState.pokemons[i].abilities = data.abilities[0].ability.name;
                                    return prevState;
                                });

                            });
                    }
                );

        }
    }

  render() {
    return (
        <div className='container'>
            <BootstrapTable data={ this.state.pokemons } borderd = {true} pagination={true} options={ {sizePerPage:5} }>
                <TableHeaderColumn dataField='id' filter={ { type: 'TextFilter', delay: 1000 } } isKey>#</TableHeaderColumn>
                <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', delay: 1000 } } >Name</TableHeaderColumn>
                <TableHeaderColumn dataField='image'  dataFormat={imageFormatter}>Avatar</TableHeaderColumn>
                <TableHeaderColumn dataField='type' filterFormatted dataFormat={ enumFormatter } formatExtraData={ pokemonsType }
                                   filter={ {type: 'SelectFilter', options: pokemonsType } } >Type</TableHeaderColumn>
                <TableHeaderColumn dataField='abilities' filter={ { type: 'TextFilter', delay: 1000 } } >Abilities</TableHeaderColumn>
            </BootstrapTable>
            <Button onClick={this.save}  bsStyle='primary'>Add Pokemons</Button>
        </div>
    );
  }
}

export default App;