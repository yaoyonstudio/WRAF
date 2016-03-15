angular.module('wraf', ['ngResource', 'ngRoute', 'ngSanitize', 'wraf.controllers', 'wraf.services'])

.constant('siteInfo', {
    wpApiUrl: 'http://www.example.com/wp-json/wp/v2',
    siteTitle: '网站标题',
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
