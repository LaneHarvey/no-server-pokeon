angular.module('project').service('pokemonService', function($http,$q) {

  var deferred = $q.defer();


  $http.get('http://pokeapi.co/api/v2/pokemon-species/').then(function(data){
    deferred.resolve(data)
  })
  this.getPokemon = function() {
    return deferred.promise
  }
});
