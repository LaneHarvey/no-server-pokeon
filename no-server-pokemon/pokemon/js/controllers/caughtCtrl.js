angular.module('pokeFinder').controller('caughtCtrl', function($scope, mainSrv, $state) {
var vm = this;

vm.getTrip = function() {
var pokemon = mainSrv.pokeInfo;
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].id == $state.params.id) {
        vm.caughtMon = pokemon[i];
    }
}
};
vm.getTrip();

});
