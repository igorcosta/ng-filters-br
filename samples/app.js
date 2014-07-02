var app = angular.module('myApp', ['ngSanitize','brasil.filters']);

app.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.moedas = ['1000','2000','399','-9000'];
	$scope.cpfs = ['22255544477',10032045604];
	$scope.cnpjs = [45675044000116,10705066000113,12345567000120];
	$scope.ceps_br = [56310505,045304010];
	$scope.tels = [11986225024,11986450021,8738618545];
}]);