angular.module('app', ['ngMaterial', 'ngAria', 'ngMdIcons', 'indexCtrl', 'dataService'])

    .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');
})
