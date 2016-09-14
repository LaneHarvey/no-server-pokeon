angular.module('pokeFinder').service('mainSrv', function(){

    this.pokeInfo = [{
        name: 'Bulbasaur',
        type: 'Grass/Poison',
        image: "../img/bulbasaur.svg",
        id: 'Route 2',
        price: 1345

    }, {
        name: 'Charmander',
        type: 'Fire',
        image: "../img/charmander.png",
        id: 'Route 3',
        price: 909
    },{
        name: 'Squirtle',
        type: 'Water',
        image: "../img/squirtle.png",
        id: 'Route 4',
        price: 1112


    }];
});
