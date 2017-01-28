app.directive('wine', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'wine/wineTemplate.html',
    controller: 'simpleWineController'
  };
});
