app.controller('onewineController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  var year = $routeParams.year;
  $http.get('http://localhost/WinesAPI/getOne.php?year=' + year)
  .then(function(response){
    $scope.wines = response.data;
  });
}]);
