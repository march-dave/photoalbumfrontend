'use strict';

var app = angular.module('pafApp', ['ui.router']);

// app.run(function($stormpath){
//   $stormpath.uiRouter({
//     loginState: 'login',
//     defaultPostLoginState: 'home'
//   });
// });

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html', controller: 'homeCtrl',
    resolve: {
        PhotoAlbumService: function(PhotoAlbumService) {
          return PhotoAlbumService.getItemAll();
        }
    }
  })
    // .state('login', { url: '/login', templateUrl: '/html/login.html' })
    // .state('register', { url: '/register', templateUrl: '/html/register.html' })
    //
    //
    // .state('quotes', {
    //   url:'/quotes',
    //   templateUrl: '/html/quotes.html',
    //   controller: 'quotesCtrl'
    //   ,resolve: {
    //     SimpleEBayResolve: function(SimpleEBayService) {
    //       return SimpleEBayService.getItemAll();
    //       // return 'SimpleEBayService.getItemAll();'
    //     }
    //   }
    // })

  $urlRouterProvider.otherwise('/')
});
