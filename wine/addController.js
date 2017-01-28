app.controller('addController', ['$scope', '$http', function($scope, $http){

  // $scope.name = "";
  // $scope.year = "";
  // $scope.grapes = "";
  // $scope.country = "";
  // $scope.region = "";
  // $scope.description = "";
  // $scope.pictutre = "";


  $scope.postData = function(){
    var thedata = {
      'name': $scope.name,
      'year': $scope.year,
      'grapes': $scope.grapes,
      'country': $scope.country,
      'region': $scope.region,
      'description': $scope.description,
      'picture': $scope.picture
    };

    thedata.picture = thedata.pincture || 'generic.jpg';

    $http({
      method: 'POST',
      url: 'http://localhost/WinesAPI/add.php',
      data: thedata,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
  };

}]);
