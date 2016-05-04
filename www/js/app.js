// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicFBStarter', ['ionic', 'starter.controllers', 'firebase'])
  //
  // SET THE CONSTANTS FOR THE REFS FOR FIREBASE/ANGULARFIRE
  .value("AUTHREF", new Firebase("https://[YOUR-STUFF].firebaseio.com/"))
  .value("TEXT_ITEMS_REF", new Firebase("https://[YOUR-STUFF].firebaseio.com/textItems"))
  //
  // DEFAULT RUN BLOCK
  .run(function ($ionicPlatform, $rootScope, $state) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });


    $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {

        // if the error is "noUser" the go to login state
        if (error === "NO USER") {
          event.preventDefault();
          console.log("go to login state");
          $state.go('login', {});
        }
      });
  })
  //
  // CONFIGURATION BLOCK, SPECIFICALLY ROUTING
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl',
        cache: false
      })
      .state('home', {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl',
        cache: false,
        resolve: {
          user: ['$firebaseAuth', '$q', 'AUTHREF', function ($firebaseAuth, $q, AUTHREF) {
            var authData = $firebaseAuth(AUTHREF).$getAuth();
            return $q(function (resolve, reject) {
              authData ? resolve(authData) : reject("NO USER")
            })
          }]
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  });
