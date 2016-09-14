angular.module('pokeFinder').controller('locationsCtrl', function($scope, mainSrv) {
var vm = this;

vm.locations = mainSrv.pokeInfo;


});
