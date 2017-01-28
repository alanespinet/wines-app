app.controller('allwinesController', ['$scope', '$http', function($scope, $http){
  $http.get('http://localhost/WinesAPI/getAll.php')
  .then(function(response){
    $scope.wines = response.data;
  });
}]);
