angular.module('indexCtrl', [])
    .controller('indexCtrl', function($scope, $rootScope, $mdSidenav, $compile, $mdBottomSheet, dataService){
        dataService.getData()
            .then(function(resp) {
                $scope.userData = resp.data;
                $scope.selected = $scope.userData[0];
        }, function errorCallback(err){
            console.log(err);
          });
    
        
        $scope.selectUser = function( users ) {
            $scope.selected = users;
            $mdSidenav('left').toggle();
        }
        
        $scope.share = function(share) {
            $mdBottomSheet.show({
                controller: bottomSheetCtrl,
                controllerAs : 'vm',
                templateUrl : './templates/bottomSheet.html',
                parent: angular.element(document.querySelector('#content'))
            });
            
            function bottomSheetCtrl() {
                $rootScope.user = share;
            }
        } 
        
        $scope.toggleList = function() {
            $mdSidenav('left').toggle();
        }
});