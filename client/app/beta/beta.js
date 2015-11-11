angular.module('receptacle.beta', [])
   .controller('ListController', ['$scope', function ($scope, $http) {
        // $scope.search = ""; //this is the key line.
        $scope.sendToServer = function(){
          $http.post('/api',{'item':$scope.listitem})
              .success(function(res){
                getFromServer();
              });
            }
          getFromServer();
          function getFromServer(){
            $http.get('/api').success(function(res){
                $scope.items = res;
                console.log(res);
            });
        }
      }]);
