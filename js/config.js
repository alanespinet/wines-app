app.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    templateUrl: 'templates/wineList.html',
    controller: 'allwinesController'
  })
  .when('/wines', {
    redirectTo: '/'
  })
  .when('/wine/:year', {
    templateUrl: 'templates/wineList.html',
    controller: 'onewineController'
  })
  .when('/add', {
    templateUrl: 'templates/wineInsert.html',
    controller: 'addController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
