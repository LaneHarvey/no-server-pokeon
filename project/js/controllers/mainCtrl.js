angular.module('project').controller('mainCtrl', function($scope, pokemonService) {

  var promise = pokemonService.getPokemon();
  promise.then(function(data){
    $scope.pokemons = data.data
    console.log($scope.pokemons)
  })
});
