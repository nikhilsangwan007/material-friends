angular.module('app', ['ngMaterial', 'ngAria', 'ngMdIcons', 'indexCtrl', 'dataService'])

    .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue');
})
