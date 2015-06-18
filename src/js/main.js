//var API_URL = 'http://api.wunderground.com/api/9608de0b18f9ff6f/conditions/geolookup/forecast10day/q/';
angular
  .module('weatherapp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/index.html'
      })
      .when('/_____', {
        templateUrl: 'views/zip.html',
        controller: 'ZipController',
        controllerAs: 'zip'
      })
  })
  .controller('ZipController', function ($http, $routeParams) {
    var vm = this;
    var zip = $routeParams.zip;

  })
  .controller('WeatherController', function ($http) {
    var vm = this;

    navigator.geolocation.getCurrentPosition(function (geoposition) {
      var lat = geoposition.coords.latitude;
      var long = geoposition.coords.longitude;

      $http
        .get(`http://api.wunderground.com/api/9608de0b18f9ff6f/conditions/q/${lat},${long}.json`)
        .success(function (data) {
          vm.temp_f = data.current_observation.temp_f;
        });

    });
  });