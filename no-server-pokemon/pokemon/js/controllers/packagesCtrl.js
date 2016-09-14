angular.module('pokeFinder').controller('packagesCtrl', function($scope, mainSrv) {
var vm = this;

vm.packages = mainSrv.pokeInfo;

});
