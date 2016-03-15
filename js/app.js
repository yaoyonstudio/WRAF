angular.module('wraf', ['ngResource', 'ngRoute', 'ngSanitize', 'wraf.controllers', 'wraf.services'])

.constant('siteInfo', {
    wpApiUrl: 'http://www.fymedia.tk/wp-json/wp/v2',
		requestUrl:'http://www.fymedia.tk/api',
    siteTitle: '锋悦传媒',
})

.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl:'tpl/main.html',
    controller:'mainCtrl'
  })
  .when('/about',{
    templateUrl:'tpl/about.html',
    controller:'aboutCtrl'
  })
  .when('/services',{
    templateUrl:'tpl/services.html',
    controller:'servicesCtrl'
  })
  .when('/news',{
    templateUrl:'tpl/news.html',
    controller:'newsCtrl'
  })
  .when('/news/:id',{
    templateUrl:'tpl/content.html',
    controller:'contentCtrl'
  })
  .when('/contact',{
    templateUrl:'tpl/contact.html',
    controller:'contactCtrl'
  })
  .otherwise({
    redirectTo:'/'
  });

})
