app.controller('simpleWineController', ['$scope', '$http', function($scope, $http){
  $scope.delete = function(id){
    $http.get(`http://localhost/WinesAPI/delete.php?id=${id}`);
  };
}]);
